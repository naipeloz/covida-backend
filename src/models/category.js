var mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section'
    },
    isVisible: {
        type: Boolean,
        default: true
    },
    wantsToHelp: {
        type: Boolean,
        default: false
    },
    needsHelp: {
        type: Boolean,
        default: true
    },
})

const Category = mongoose.model('Category', schema);

module.exports = Category;
