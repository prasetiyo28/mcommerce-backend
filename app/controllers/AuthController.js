const DB = require('../models');
const Users = DB.users
exports.getUsers = async (req, res, next) => {
   try {
    const users = await Users.findAll({});

    return res.status(200).json({ success: true, msg_code: 'GET_USER_SUCCESS', msg_client: 'Get Dummy Token Success' , users});
   } catch (error) {
       console.log("duar",error);
       
    return res.status(200).json({ success: true, msg_code: 'GET_USER_FAILED', msg_client: 'Get Dummy Token Failed' , error});
   }
  };