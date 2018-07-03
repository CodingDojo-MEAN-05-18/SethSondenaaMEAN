const mongoose = require('mongoose');
const { Schema } = mongoose;


const quoteSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
    }
} , {
    timestamps: true,
});

module.exports = mongoose.model('Quote', quoteSchema);