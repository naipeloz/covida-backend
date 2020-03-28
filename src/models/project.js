var mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
})

const Project = mongoose.model('Project', schema);

module.exports = Project;
