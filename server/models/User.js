const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    }, 

    lastName: {
        type: String,
        required: true,
    },
    id:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    Income:{
        type: Number,
        required: true
    }
})

module.exports= mongoose.model('user', userSchema)