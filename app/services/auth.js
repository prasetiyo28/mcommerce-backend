const DB = require('../models');
const Users = DB.mobileUserlogin

exports.getLogin = async params => {
    return Users.findOne({
        where : {
            email : params.email,
            password : params.password
        }
    });
}