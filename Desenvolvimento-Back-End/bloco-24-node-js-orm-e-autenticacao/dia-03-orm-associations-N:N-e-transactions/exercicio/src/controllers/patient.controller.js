const patientService = require('../services/patients.service');
const { Patient, Surgery } = require('../models');

const getPatientWithPlanController = async (_req, res) => {
  try {
    const result = await patientService.getPatientWithPlan();
    if (!result) return res.status(404).json({ message: 'algo esta errado' });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'erro interno' });
  }
};

const getPatientsWithSurgeryController = async (_req, res) => {
  try {
    const result = await patientService.getPatientsWithSurgery();
    if (!result) return res.status(404).json({ message: 'algo esta errado' });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'erro interno' });
  }
};

const getPlansByIdWithPatients = async (req, res) => {
  try {
    const result = await patientService.getPlansById(req.params.id);
    if (!result) return res.status(404).json({ message: 'algo esta errado' });

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'erro interno' });
  }
};

const createPatient = (req, res) => {
  const { fullname, plan_id } = req.body;
  Patient.create({ fullname, plan_id })
    .then((response) => res.status(200).json(response))
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }));
};

const getPatientsAndSurgeriesNoDoctor = (_req, res) => (
  Patient.findAll({
    include: {
      model: Surgery,
      as: 'surgeries',
      attributes: { exclude: ['doctor'] },
      through: { attributes: [] },
    },
  })
    .then((listOfPatients) => {
      if (listOfPatients === null) {
        return res.status(404).send({ message: 'No patients found' });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
);

const getDoctorSurgeries = (req, res) => (
  Surgery.findAll({
    where: { doctor: req.params.name },
    include: [{ model: Patient, as: 'patients', through: { attributes: [] } }],
  })
    .then((listOfPatients) => {
      if (listOfPatients === null) {
        return res.status(404).send({ message: 'No plan found' });
      }

      return res.status(200).json(listOfPatients);
    })
    .catch(() => res.status(500).json({ message: 'Algo deu errado' }))
);

module.exports = {
  getPatientWithPlanController,
  getPatientsWithSurgeryController,
  getPlansByIdWithPatients,
  createPatient,
  getPatientsAndSurgeriesNoDoctor,
  getDoctorSurgeries,
};