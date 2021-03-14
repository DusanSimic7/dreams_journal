const mongoose = require('mongoose');

const dreamsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "This is required"]
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    type: {
        type: String,
        required: true,
        enum: { values: ['happy', 'sad', 'scary', 'exciting'],
        message: 'Dream types must have value \'happy\', \'sad\', \'scary\', \'exciting\''}

    }

})

module.exports = mongoose.model('Dreams', dreamsSchema)