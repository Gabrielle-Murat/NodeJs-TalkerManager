const express = require('express');

const talkerUtils = require('../utils/fs-utils');
const authMiddleware = require('./authMiddleware');
const { createTalker } = require('./talkersManagement');
const { validateDateFormat, talkersValidation } = require('./talkersValidation');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkers = await talkerUtils.getTalker();

  return res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const talkers = await talkerUtils.getTalker();

  const talker = talkers.find(({ id }) => id === parseInt(req.params.id, 10));

  if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(talker);
});

router.use(authMiddleware);

router.post(
  '/',
  talkersValidation,
  validateDateFormat,
  async (req, res) => {
    const talker = req.body;
    const newTalker = await createTalker(talker);
    return res.status(201).json(newTalker);
  },
);

module.exports = router;
