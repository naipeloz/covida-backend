var mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
})

const Section = mongoose.model('Section', schema);

module.exports = Section;