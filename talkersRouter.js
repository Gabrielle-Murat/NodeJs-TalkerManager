const express = require('express');

const talkerUtils = require('./fs-utils');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkers = await talkerUtils.getTalker();

  return res.status(200).json(talkers);
});

module.exports = router;
