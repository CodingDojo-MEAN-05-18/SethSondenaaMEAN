// Models
const mongoose =  require('mongoose');
const { Schema } = mongoose;

const birdSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    age: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        default: 'unknown',
    }
} , {
    timestamps: true,
});

module.exports = mongoose.model('Bird', birdSchema);