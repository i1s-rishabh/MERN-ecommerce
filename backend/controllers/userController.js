const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors"); // middleware 
const User = require("../models/userModels")

// Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const {name, email, password} = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            //use cloudneary
            public_id:"this is a sample id",
            url:"profilepicurl"
        }
    })

    const token = user.getJWTToken()

    res.status(201).json({
        success: true,
        token,
    })
})

