const loginData = require('../schemas/loginValidations');

function loginValidation(req, res, next) {
  const { error } = loginData.validate(req.body);
  // console.log(error);
  // console.log(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    // console.log(code);

    return res.status(parseInt(code, 10)).json({ message });
  }

  return next();
}

module.exports = loginValidation;
