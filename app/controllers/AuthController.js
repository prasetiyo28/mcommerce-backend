const auth = require('../services/auth');
exports.getUsers = async (req, res, next) => {
   try {
   
    const params = req.body;
    console.log("===========>",params);
    
    const users = await auth.getLogin(params);
    if (!users) return res.status(400).json({ success: true, msg_code: 'USER_NOT_FOUND', msg_client: 'Login tidak ditemukan'}); 
    return res.status(200).json({ success: true, msg_code: 'LOGIN_SUCCESS', msg_client: 'Login Sukses' , users});
   } catch (error) {
       console.log("duar",error);
       
    return res.status(400).json({ success: true, msg_code: 'LOGIN_FAILED', msg_client: 'Login Failed' , error});
   }
  };


  
  