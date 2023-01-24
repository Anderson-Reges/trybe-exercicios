const { Account, Profile, Comment } = require('../models');

const getAll = async () => {
  const users = await Account.findAll({
    include: { model: Profile, as: 'profiles' },
  });

  return users;
};

const getAllById = async (id) => {
  const user = await Account.findAll({
    where: { id },
  });

  return user;
};

const getCommentsByUserId = async (id) => {
  const users = await Comment.findAll({
    where: { accountId: id },
  });

  return users;
};

module.exports = {
  getAll,
  getAllById,
  getCommentsByUserId,
};