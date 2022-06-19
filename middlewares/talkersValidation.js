const talkersData = require('../schemas/talkersValidations');

function validateDay(day) {
  if (Number.isNaN(day) === true || day < 1 || day > 31) {
    return null;
  }
}

function validateMonth(month) {
  if (Number.isNaN(month) === true || month < 1 || month > 12) {
    return null;
  }
}

function validateYear(year) {
  if (Number.isNaN(year) === true || year < 1970 || year > 2100) {
    return null;
  }
}

function validateDateFormat(req, res, next) {
  const watchedDate = req.body.talk.watchedAt;
  if (watchedDate) {
    const dateArray = watchedDate.split('/', 3);
    const day = Number.parseInt(dateArray[0], 10);
    const month = Number.parseInt(dateArray[1], 10);
    const year = Number.parseInt(dateArray[2], 10);

    if (validateDay(day) === null
      || validateMonth(month) === null
      || validateYear(year) === null) {
      return res
        .status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    } 
    return next();
  }
  return next();
}

function talkersValidation(req, res, next) {
  const { error } = talkersData.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = { validateDateFormat, talkersValidation };
