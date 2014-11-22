'use strict';
var fs = require('fs');
var split = require('split');
var thru = require('through2');
var req = require('request');


var coords = function (address, data) {

    if (data.results.length) {
        var result = { address: address };
        result.location = data.results[0].geometry.location;
        console.log(result);
    } else {
        console.log("Could not identify location for", address, data.status);
    }
};


var find = function (address, callback) {

    var url = 'https://maps.googleapis.com/maps/api/geocode/json?'
            + 'address=' + address + '&sensor=false';
    /*jslint unparam: true */
    req(url, function (err, res, body) {
        callback(address, JSON.parse(body));
    });
};


var places = fs.createReadStream('places.txt');

// var address = "27 Canterbury Way, Sewanee, TN 37375";
// find(address, coords);

var getLatLon = function (data, enc, next) {
    var place = data.toString();
    find(place, coords);
    next();
};

places.pipe(split()).pipe(thru(getLatLon));
