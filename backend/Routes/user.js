const User = require('../models/UserSchema');
const express = require('express');

const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedUser });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};

const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id).select('-password');
        // console.log('User:', user);

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'Successfully found', data: user });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ success: false, message: 'Failed' });
    }
};


const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.status(200).json({ success: true, message: 'Successfully found', data: users });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};

const router = express.Router();

router.get('/:id', getSingleUser);
router.get('/', getAllUser);
router.put('/:id', updateUser); // Use router.put for updating
router.delete('/:id', deleteUser); // Use router.delete for deleting

module.exports= router;
