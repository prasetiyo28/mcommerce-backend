const DB = require('../models');
const Users = DB.mobileUserlogin;

exports.getLogin = async params => {
  return Users.findOne({
    where: {
      email: params.email,
      password: params.password
    }
  });
};

exports.updateTokenById = async params => {
  console.log('duar===========>', params);

  return Users.update({
    token: params.token
  },
  {
    where: {
      id: params.id
    }
  });
};
