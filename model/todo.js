var Todo = require('mongoose').model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    completedTime: {
        type: Number,
        default: null
    }
});

module.exports = Todo;