const mongoose= require("mongoose");

const UserScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    confirmpass:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true

    }
 })


 const Register=new mongoose.model("Register", UserScheme);

 module.exports=Register;