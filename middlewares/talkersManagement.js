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

async function deleteTalker(talkerId) {
  const talkers = await talkerUtils.getTalker();
  const originalLength = talkers.length;

  const remainingTalkers = talkers.filter((person) => person.id !== talkerId);
  const newLength = remainingTalkers.length;

  if (originalLength > newLength) {
    await talkerUtils.setTalker(remainingTalkers);
    return true;
  }

  return false;
}

async function searchByTerm(queryTerm) {
  const talkers = await talkerUtils.getTalker();

  const talker = talkers.filter(({ name }) => name.includes(queryTerm));

  return talker;
}

module.exports = { createTalker, updateTalker, deleteTalker, searchByTerm };
