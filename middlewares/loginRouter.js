const express = require('express');

const tokenGenerator = require('../utils/token-generation-utils');

const router = express.Router();

router.post('/', (_req, res) => {
  const token = tokenGenerator();
  res.status(200).json({ token: `${token}` });
});

module.exports = router;
