const bcrypt = require('bcrypt');

const encrypt = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

const compare = (password, hashPassword) => {
  const compare = bcrypt.compareSync(password, hashPassword);
  return compare;
};

module.exports = {
  encrypt,
  compare,
};
