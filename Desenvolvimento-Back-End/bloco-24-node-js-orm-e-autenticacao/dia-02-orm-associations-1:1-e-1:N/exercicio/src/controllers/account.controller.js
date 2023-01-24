const { getAll, getAllById, getCommentsByUserId } = require('../services/account.service');
const { Account, Profile, Comment } = require('../models');

const getAllController = async (req, res) => {
  try {
    const result = await getAll();
    if (!result) return res.status(200).json({ message: 'algo deu errado' });
    return res.status(200).json(result);
  } catch (e) {
    return res.status(200).json(e.message);
  }
};

const getAccountByIdLazy = async (req, res) => {
  try {
    const listOfAccounts = await getAllById(req.params.id);

    if (!listOfAccounts.length) {
      return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(listOfAccounts[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const getCommentsById = async (req, res) => {
  try {
    const listOfComments = await getCommentsByUserId(req.params.id);

    if (!listOfComments.length) {
      return res.status(404).send({ message: 'Nenhuma conta cadastrada' });
    }

    return res.status(200).json(listOfComments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const saveAccountAndProfile = async (req, res) => {
  try {
    const { email, password, firstName, lastName, phone } = req.body;
    const account = await Account.create({ email, password });

    if (!account) {
      return res.status(404).send({ message: 'Erro ao cadastrar uma conta!' });
    }

    const profile = await Profile.create(
      { firstName, lastName, phone, accountId: account.id },
    );
    
    if (!profile) {
      return res.status(404).send({ message: 'Erro ao cadastrar um perfil!' });
    }
    
    return res.status(200).json({ message: 'Conta cadastrada com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const saveComment = async (req, res) => {  
  try {
    const { id } = req.params;
    const { message } = req.body;

    const comment = await Comment.create(
      { message, upvoting: 0, downvoting: 0, accountId: id },
    );

    if (!comment) {
      return res.status(404).send({ message: 'Erro ao cadastrar o comentário' });
    }

    return res.status(200).json({ message: 'Comentário cadastrado com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getAllController,
  getAccountByIdLazy,
  getCommentsById,
  saveAccountAndProfile,
  saveComment,
};