'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    //Extend plants from users in the future
    // extend = require('mongoose-schema-extend');

var PlantSchema = new Schema({
  picture: { type: String },
  name: { type: String },
  phone: String,                                /**** NOTE: make required for search purposes? ****/
  email: { type: String, lowercase: true },     /**** NOTE: make required for search purposes? ****/
  age: { type: Number },
  hometown: { type: String },
  currentCity: { type: String },
  reminders: { type: [String] },
  relationship: {
    partner: { type: String }
  },
  family: [{
    name: { type: String },
    relation: { type: String }
  }],
  education: [{                                 /**** NOTE: Can we use Foursquare or some other places API? ****/
    level: { type: String },
    name: { type: String },
  }],
  employer: { type: String },                   /**** NOTE: Can we use Foursquare or some other places API? ****/
  importantDates: [{ 
    eventName: { type: String },
    date: { type: Date },
    description: { type: String  }
  }],
  interests: [{ 
    type: { type: String },
    tags: { type: [String] }
  }],                  
  projects: [{
    type: { type: String },
    name: { type: String },
    description: { type: String },
    link: { type: String }
  }],
  notes: {
    body: { type: String }
  },
  otherFields: [{
    title: { type: String },
    body: { type: String }
  }],
  dateAdded: {
  	type: Date,
  	default: Date.now()
  },
  role: {
    type: String,
    default: 'plant'
  }
});

module.exports = mongoose.model('Plant', PlantSchema);