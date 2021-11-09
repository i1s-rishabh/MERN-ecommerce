const mongoose = require('mongoose');
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
        maxlength:[30, "Name cannot exceed"],
        minLength:[3, "Name should have more then 3 characters"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true,
        validator: [validator.email, "Please enter a valid email"],
    },
    password:{
        type:String,
        required:[true, "Please enter your password"],
        minlength:[6, "Password must be at least 6 characters"],
        select: false,
    },
    avatar:{
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
            },
    },
    role:{
        type:String,
        default: "user",
    },
    resetPasswordToken:String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
    if(this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
})

// JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({
        id:this.id,
    }, process.env.JWT_SECRET, {
        expiresIn:process.env.JWT_EXPIRE,
    })
}

module.exports = mongoose.model("User", userSchema)