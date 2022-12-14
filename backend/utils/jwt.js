const jwt = require('jsonwebtoken');

const sign = (payload, option) => {
  const SECRET_TOKEN = process.env.SECRET_TOKEN;
  return jwt.sign(payload, SECRET_TOKEN, option);
};

const verify = (token, option) => {
  const SECRET_TOKEN = process.env.SECRET_TOKEN;
  return jwt.verify(token, SECRET_TOKEN, option);
};

module.exports = {
  sign,
  verify,
};
