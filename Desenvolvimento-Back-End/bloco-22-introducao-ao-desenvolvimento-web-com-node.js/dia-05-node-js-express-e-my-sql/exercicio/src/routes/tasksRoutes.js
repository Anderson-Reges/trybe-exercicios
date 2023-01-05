const express = require('express');
const taskDB = require('../db/taskDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const task = req.body;
  try {
    const [result] = await taskDB.insert(task);
    res.status(201).json({ message: `Tarefa cadastrada com sucesso com id: ${result.insertId}` });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao adicionar a tarefa' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  try {
    const [result] = await taskDB.update(task, id);
    if (result.affectedRows > 0) {
      res.status(201)
      .json({ message: `Tarefa com id: ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await taskDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200)
      .json({ message: `Tarefa com id: ${id} deletada com sucesso` });
    } else {
      res.status(404).json({ message: 'Tarefa não encontrada' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const [result] = await taskDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [[result]] = await taskDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: `Tarefa com id: ${id} não encontrada` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
