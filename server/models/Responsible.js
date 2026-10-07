const mongoose=require("mongoose")

const responsibleSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true    
    },
    id:{
        type: String,
        required: true
    },
    phone:{
        type: String
    },
    email:{
        type: String
    }
    

})

module.exports=mongoose.model('responsible', responsibleSchema)