const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema ({
    authid: { type: String },
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    groups: [ String ],
    events: [ String ],
    classes: [ String ]
})

module.exports = mongoose.model('users', userModel);