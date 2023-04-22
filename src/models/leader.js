const mongoose= require("mongoose");

const userschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    time:{
        type: Number,
        required:true,
    }

});

const leader=new mongoose.model("leader", userschema);

module.exports=leader;