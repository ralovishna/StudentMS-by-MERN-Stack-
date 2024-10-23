const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentManagementSytem');


const userSchema=mongoose.Schema({
    User:String,
    email:String,
    password:String
},
{timestamps:true});


const userModel=mongoose.model('user',userSchema);
module.exports=userModel;