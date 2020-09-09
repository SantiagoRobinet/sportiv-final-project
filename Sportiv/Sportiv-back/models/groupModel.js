const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupModel = new Schema (  {
    title: { type: String },
    photo: { type: String },
    description: { type: String },
    members: { type: Number },
    events: [ String ]
  }
)

module.exports = mongoose.model('groups', groupModel);