const jwt = require('jsonwebtoken')
const UserModel= require('../models/User')
const ProductModel = require('../models/Product')   

const checkuserauth = async(req,res,next)=>{
    // console.log('hello auth')
    const {token}= req.cookies
    if (!token) {
        res
        .status(401)
        .json({ status: "failed", message: "unautharized user please not open" });
    }else{
        const verifytoken = jwt.verify(token,'ankitgautam@mca1234567890')
        //console.log(verifytoken)
        const data = await UserModel.findOne({_id:verifytoken.ID})
        // console.log(data)
        req.data1 = data
        next()
    }
}
module.exports = checkuserauth