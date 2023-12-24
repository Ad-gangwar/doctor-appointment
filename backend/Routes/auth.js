const express = require('express');
const router = express.Router();
const User = require('../models/UserSchema');
const Doctor = require('../models/DoctorSchema');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;
const app = express();
app.use(express.json());

router.post('/register', async (req, res) => {
    // Extracting user details from the request body
    const { email, password, name, role, gender } = req.body;

    try {
        // Check if user with the same email already exists
        const existingUser = role === 'patient' ? await User.findOne({ email }) : await Doctor.findOne({ email });
        if (existingUser) {
            return res.status(403).json({ error: "A user with this email already exists" });
        }

        // Hash the password using bcrypt
        const hashPass = await bcrypt.hash(password, 10);

        // Create a new user based on the role
        let user;
        if (role === 'patient') {
            user = new User({ name, email, password: hashPass, gender, role });
        } else if (role === 'doctor') {
            user = new Doctor({ name, email, password: hashPass, gender, role });
        }
        // console.log(user);
        // Save the user to the database
        await user.save();
        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


// Login endpoint
router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 }).withMessage('should contain min 5 char'),
], async (req, res) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
    }

    try {
        let email = req.body.email;
        let userData = null;
        const patient=await User.findOne({email});
        const doctor=await Doctor.findOne({email});
        if(patient){
            userData=patient;
        }
        else if(doctor){
            userData=doctor;
        }
        // console.log(userData);
        if (!userData) {
            return res.status(400).json({ errors: 'Email not found! Enter correct email' });
        }
        const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
        if (!pwdCompare) {
            return res.status(400).json({ errors: 'Incorrect Password!' });
        }
        const data = {
            user: {
                id: userData.id
            }
        };
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true, authToken: authToken, data: data});
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
});

module.exports = router;
