const auth = require('../services/auth');
const md5 = require('md5');
exports.getUsers = async (req, res, next) => {
   try {
   
    const params = req.body;
    let user = {}
    user = await auth.getLogin(params);
    if (!user) return res.status(400).json({ success: true, msg_code: 'USER_NOT_FOUND', msg_client: 'Login tidak ditemukan'}); 
    const currentTime = new Date().toISOString();
    const random = Math.random().toString();
    const token = md5(currentTime + random);
    user.token = token;
    await auth.updateTokenById(user);
    return res.status(200).json({ success: true, msg_code: 'LOGIN_SUCCESS', msg_client: 'Login Sukses' ,'access_key' : user.token, user});
   } catch (error) {
   console.log("duar",error);
       
    return res.status(400).json({ success: true, msg_code: 'LOGIN_FAILED', msg_client: 'Login Failed' , error});
   }
  };



  
  