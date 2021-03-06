'use strict';

var _ = require('lodash');
var Plant = require('./plant.model');

// Get list of plants
exports.index = function(req, res) {
  Plant.find(function (err, plants) {
    if(err) { return handleError(res, err); }
    return res.json(200, plants);
  });
};

// Get a single plant
exports.show = function(req, res) {
  Plant.findById(req.params.id, function (err, plant) {
    console.log("getPlant got to show!");
    console.log(req.params.id);
    if(err) { return handleError(res, err); }
    if(!plant) { return res.send(404); }
    return res.json(plant);
  });
};

// Creates a new plant in the DB.
exports.create = function(req, res) {
  Plant.create(req.body, function(err, plant) {
    if(err) { return handleError(res, err); }
    return res.json(201, plant);
  });
};

// Updates an existing plant in the DB.
exports.update = function(req, res) {
  Plant.findById(req.body._id, function(err, plant) {
    if ( err ) throw err;
    var updatedPlant = _.merge( plant, req.body );
    updatedPlant.save( function(err, updatedPlant, numModified){
      if ( err ) console.log( 'UPDATE PLANT ERROR: ', err );
      res.json(updatedPlant);
    });
  });
};

// Deletes a plant from the DB.
exports.destroy = function(req, res) {
  console.log(req.params);
  Plant.findById(req.params.id, function (err, plant) {
    if(err) { return handleError(res, err); }
    if(!plant) { return res.send(404); }
    plant.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
