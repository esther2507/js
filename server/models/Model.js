const mongoose=require("mongoose")

const modelSchema= new mongoose.Schema({
    Expense:{
        type: Number,
        required: true
    },
    Income:{
       type: Number,
        required: true 
    },
    goal:{
        type: Number,
        required: true
    },
    title:{
        type: String,
    },
    category:{
        type: String,
        required: true 
    }, 

    data:{
        type: String
    }
})

module.exports= mongoose.model('model', modelSchema)