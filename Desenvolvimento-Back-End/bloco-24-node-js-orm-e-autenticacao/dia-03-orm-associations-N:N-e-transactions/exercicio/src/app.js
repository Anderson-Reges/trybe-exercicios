const express = require('express');
const {
  getPatientWithPlanController, 
  getPatientsWithSurgeryController, 
  getPlansByIdWithPatients,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
  getDoctorSurgeries,
} = require('./controllers/patient.controller');

const app = express();
app.use(express.json());

app.get('/patient', getPatientWithPlanController);
app.get('/patient/surgery', getPatientsWithSurgeryController);
app.get('/plan/:id', getPlansByIdWithPatients);
app.get('/surgeries/nodoctor', getPatientsAndSurgeriesNoDoctor);
app.get('/surgeries/:name', getDoctorSurgeries);
app.post('/', createPatient);

module.exports = app;