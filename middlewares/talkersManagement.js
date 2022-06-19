const talkerUtils = require('../utils/fs-utils');

async function createTalker(talker) {
  const talkers = await talkerUtils.getTalker();
  const newTalkerId = talkers.length + 1;
  const newTalker = { id: newTalkerId, ...talker };

  const newTalkersList = [...talkers, newTalker];

  await talkerUtils.setTalker(newTalkersList);

  return newTalker;
}

module.exports = { createTalker };
