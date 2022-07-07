var mongoose=require('mongoose');
Schema=mongoose.Schema;

var userSchema=new Schema(
    {
        Name:String,
        Age:Number
    }
);

