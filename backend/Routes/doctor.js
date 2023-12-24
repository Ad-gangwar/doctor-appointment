const Doctor = require('../models/DoctorSchema');
const express = require('express');

const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({ success: true, message: 'Successfully updated', data: updatedDoctor });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};

const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedDoctor = await Doctor.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: 'Successfully deleted', data: deletedDoctor });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};

const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id).select('-password');
        res.status(200).json({ success: true, message: 'Successfully found', data: doctor });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};


const getAllDoctor = async (req, res) => {
    try {
        const {query}=req.query;
        let doctors;
        if(query){
            doctors=await Doctor.find({
                isApproved: "approved",
                $or: [
                    {name: {$regex: query, $options: "i"}},
                    {specialization: {$regex: query, $options: "i"}},
                ],
                
            }).select('-password');
        }  else {
            doctors = await Doctor.find({isApproved: "approved"}).select('-password');
        }
        res.status(200).json({ success: true, message: 'Successfully found', data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed' });
    }
};

const router = express.Router();

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', updateDoctor); 
router.delete('/:id', deleteDoctor);

module.exports= router;
