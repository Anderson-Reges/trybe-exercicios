const { Patient, Plan, Surgery } = require('../models');

const getPatientWithPlan = async () => {
  const result = await Patient.findAll({
    include: { model: Plan, as: 'plan' },
  });

  return result;
};

const getPatientsWithSurgery = async () => {
  const result = await Patient.findAll({
    include: { model: Surgery, as: 'surgeries', through: { attributes: [] } },
  });

  return result;
};

const getPlansById = async (id) => {
  const result = await Plan.findAll({
    where: { plan_id: id },
    include: { model: Patient, as: 'patients' },
  });

  return result;
};

module.exports = {
  getPatientWithPlan,
  getPatientsWithSurgery,
  getPlansById,
};