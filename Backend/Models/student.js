const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    Personal:{
        name:String,
        dob:String,
        email:String,
        phoneNo:Number
    },
    class:{
        rollNo:Number,
        attendance:Number,
        course:String,
        batch:{
            start:String,
            end:String
        }
    },
Subjects:Array
})

const studentModel=mongoose.model('student',studentSchema);
module.exports=studentModel;