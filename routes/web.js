const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()
const checkuserauth = require('../middleware/auth')
const ProductController = require('../controllers/ProductController')

//usercontroller
router.get('/getalluser',checkuserauth,UserController.getalluser)
router.get('/getuserdetails',checkuserauth,UserController.getuserdetails)
router.post('/userinsert',UserController.userinsert)
router.post('/verifylogin',UserController.verifylogin)
router.post('/updatepassword',checkuserauth,UserController.updatepassword)
router.post('/updateprofile',checkuserauth,UserController.UpdateProfile)
router.get('/getsingleuser/:id',checkuserauth,UserController.GetsingleUser)
router.get('/deleteuser/:id',checkuserauth,UserController.DeleteUser)
router.get('/logout',UserController.Logout)

//product controller
router.post('/createproduct',ProductController.CreateProduct)
router.get('/productdisplay',ProductController.productdisplay)
router.get('/productdelete',ProductController.productdelete)


module.exports = router