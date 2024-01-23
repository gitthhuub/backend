const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();


router.get('/', doctorController.getAllDoctors);


router.post('/', doctorController.createDoctor);


router.get('/:id', doctorController.getDoctorById);

router.put('/:id', doctorController.updateDoctorById);


router.delete('/:id', doctorController.deleteDoctorById);

module.exports = router;
