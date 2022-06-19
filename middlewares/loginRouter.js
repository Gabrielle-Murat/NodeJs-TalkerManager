const express = require('express');

const tokenGenerator = require('../utils/token-generation-utils');
const loginValidation = require('./loginValidation');

const router = express.Router();

router.post('/', loginValidation, (_req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token: `${token}` });
});

module.exports = router;
