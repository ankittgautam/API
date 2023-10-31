const ProductModel = require('../models/Product')
const bcrypt = require('bcrypt')
const cloudinary = require("cloudinary").v2;
const jwt = require('jsonwebtoken')

cloudinary.config({
    cloud_name: 'dqtv9v3za',
    api_key: '726334982845574',
    api_secret: 'ud8RZuapYtkfzetYTBg1o_I-Cbg'
});

class ProductController {
  static CreateProduct = async (req, res) => {
    try {
      const file = req.files.image
      //console.log(file)
      const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: 'productimage',
      })
      //console.log(myimage)
      const result = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        numOfReviews: req.body.numOfReviews,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,
        },
      })
      //saving data
      await result.save()
      res.status(201).send({
        status: 'success',
        message: 'Product Created Successfully 😃🍻',
        result,
      })
    } catch (err) {
      console.log(err)
    }
  }

  static productdisplay = async (req, res) => {
    const data = await ProductModel.find();
    res.status(200).json({
      success: true,
      data,
    });
  };

  static productdelete = async (req, res) => {
    try {
      const data = await ProductModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "Delete Successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ProductController