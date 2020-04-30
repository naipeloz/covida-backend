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
    address: {
        type: String
    },
    waysHelp: {
        type: String
    },
    phone: {
        type: String
    },
    whatsapp: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    other: {
        type: String
    },
    email: {
        type: String
    },
    coordinates: {
        type: String
    },
    referenceAddress: {
        type: String
    },
    website: {
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
    keywords: [{
        type: String
    }],
    nameResponsable: {
        type: String
    },
    phoneResponsable: {
        type: String
    },
    emailResponsable: {
        type: String
    },
    belongsProject: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    wantsToHelp: {
        type: Boolean,
        default: false
    },
    needsHelp: {
        type: Boolean,
        default: true
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
