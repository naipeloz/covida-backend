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
    coordinates: {
        type: String
    },
    image: {
        type: String
    },
    daysService: {
        type: String
    },
    schedule: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    zone: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Zone'
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
})

const Project = mongoose.model('Project', schema);

module.exports = Project;
