const data = require('../schemas/validationsSchema');

function validation(req, res, next) {
  const { error } = data.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');

    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = validation;
