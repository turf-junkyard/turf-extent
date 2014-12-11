var extent = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var fc = require('./geojson/FeatureCollection');
var pt  = require('./geojson/Point');
var line = require('./geojson/LineString');
var poly = require('./geojson/Polygon');
var multiLine = require('./geojson/MultiLineString');
var multiPoly = require('./geojson/MultiPolygon');

var suite = new Benchmark.Suite('turf-extent');
suite
  .add('turf-extent#FeatureCollection',function () {
    extent(fc);
  })
  .add('turf-extent#Point',function () {
    extent(pt);
  })
  .add('turf-extent#LineString',function () {
    extent(line);
  })
  .add('turf-extent#Polygon',function () {
    extent(poly);
  })
  .add('turf-extent#MultiLineString',function () {
    extent(multiLine);
  })
  .add('turf-extent#MultiPolygon',function () {
    extent(multiPoly);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();