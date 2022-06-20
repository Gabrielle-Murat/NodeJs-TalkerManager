const talkerUtils = require('../utils/fs-utils');

async function createTalker(talker) {
  const talkers = await talkerUtils.getTalker();
  const newTalkerId = talkers.length + 1;
  const newTalker = { id: newTalkerId, ...talker };

  const newTalkersList = [...talkers, newTalker];

  await talkerUtils.setTalker(newTalkersList);

  return newTalker;
}

async function updateTalker(talkerId, newTalkerInfo) {
  const talkers = await talkerUtils.getTalker();

  const updatedTalkers = talkers.map((person) => {
    if (person.id === talkerId) {
      return { id: talkerId, ...newTalkerInfo };
    }
    return person;
  });

  await talkerUtils.setTalker(updatedTalkers);
  return { id: talkerId, ...newTalkerInfo };
}

module.exports = { createTalker, updateTalker };
