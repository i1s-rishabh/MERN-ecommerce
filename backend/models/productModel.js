const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require:[true, "Please enter product name"],
        trim: true, //white space will remove
    },
    description: {
        type: String,
        require:[true, "Please enter product description"]
    },
    price: {
        type: Number,
        require: [true, "Please enter product price"],
        maxLength:[8, "Price cannot exceed 8 figure"]
    },
    rating: {
        type: Number,
        default:0
    },
    images:[
        {
        public_id:{
            type: String,
            require: true,
        },
        url:{
            type: String,
            require: true,
            }
        }
    ],
    category: {
        type: String,
        require: [true, "Please enter product category"]
    },
    Stock: {
        type: Number,
        require: [true, "Please enter product Stock"],
        maxLength:[4, "Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReview:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type: String,
                require: true,
            },
            rating: {
                type: Number,
                require: true,
            },
            comment: {
                type: String,
                require: true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);