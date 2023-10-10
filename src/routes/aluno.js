const express = require('express');
const router = express.Router();
const { Aluno } = require('../models/aluno');


router.post('/', async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);
    res.status(201).json(aluno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const aluno = await Aluno.findByPk(req.params.id);
    res.json(aluno);
  } catch (err) {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Aluno.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({ message: 'Aluno atualizado com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Aluno.destroy({
      where: { id: req.params.id },
    });
    res.json({ message: 'Aluno excluído com sucesso' });
  } catch (err) {
    res.status(404).json({ error: 'Aluno não encontrado' });
  }
});

module.exports = router;