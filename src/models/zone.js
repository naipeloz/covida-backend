var mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema ({
    name: {
        type: String,
        required: true
    }
})

const Zone = mongoose.model('Zone', schema);

module.exports = Zone;
