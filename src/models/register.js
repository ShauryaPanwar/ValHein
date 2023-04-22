const mongoose= require("mongoose");

const UserScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
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

    },
    time:{
        type:Number,
    }
 });


 const Register=new mongoose.model("Register", UserScheme);

 module.exports=Register;