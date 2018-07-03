const mongoose =  require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
    },
    description: {
        type: String,
        default: "",
    },
    completed: {
        type: Boolean,
        default: false,
    },
} , {
    timestamps: true,
});

module.exports = mongoose.model('Task', taskSchema);