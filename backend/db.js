const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://admin:ezIth67fAvdwDCNp@cluster0.4g3rr.mongodb.net/paytm");

const userSchema= mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength:6
    },
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    }
});
const User= mongoose.model("User",userSchema);

module.exports={
    User
};