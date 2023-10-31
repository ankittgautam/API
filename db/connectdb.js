const mongoose = require('mongoose')

const connectDB=()=>{
    // For local DB
    // return mongoose.connect(process.env.LOCAL_URL)


    // For cloud DB
     return mongoose.connect(process.env.LIVE_URL)
    
    .then(()=>{
        console.log("Connected Succeessfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}
module.exports=connectDB