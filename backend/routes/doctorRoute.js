import express from 'express'
import { appointmentCancel, appointmentComplete, appointmentsDoctor, doctordashboard, doctorList, doctorProfile, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoc from '../middlewares/authDoc.js'

const doctorRouter = express.Router()

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/doctor-appointments', authDoc, appointmentsDoctor)
doctorRouter.patch('/complete-appointment', authDoc, appointmentComplete)
doctorRouter.patch('/cancel-appointment', authDoc, appointmentCancel)
doctorRouter.get('/doctor-dashboard', authDoc, doctordashboard)
doctorRouter.get('/doctor-profile', authDoc, doctorProfile)
doctorRouter.put('/update-profile', authDoc, updateDoctorProfile)

export default doctorRouter