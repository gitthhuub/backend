const Doctor = require('../models/Doctor');

exports.getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    next(error);
  }
};

exports.createDoctor = async (req, res, next) => {
  try {
    const doctor = new Doctor(req.body);
    await doctor.save();
    res.status(201).json({ message: 'Doctor created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    res.json(doctor);
  } catch (error) {
    next(error);
  }
};

exports.updateDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    res.json({ message: 'Doctor updated successfully', updatedDoctor: doctor });
  } catch (error) {
    next(error);
  }
};

exports.deleteDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findByIdAndDelete(req.params.id);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
      return;
    }
    res.json({ message: 'Doctor deleted successfully', deletedDoctor: doctor });
  } catch (error) {
    next(error);
  }
};
