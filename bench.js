global.extent = require('./');
global.extent2 = require('./index2.js');
var Benchmark = require('benchmark');
var fs = require('fs');

global.fc = require('./geojson/FeatureCollection');
global.pt  = require('./geojson/Point');
global.line = require('./geojson/LineString');
global.poly = require('./geojson/Polygon');
global.multiLine = require('./geojson/MultiLineString');
global.multiPoly = require('./geojson/MultiPolygon');

var suite = new Benchmark.Suite('turf-extent');
suite
  .add('turf-extent#FeatureCollection',function () {
    global.extent(global.fc);
  })
  .add('turf-extent2#FeatureCollection',function () {
    global.extent2(global.fc);
  })
  .add('turf-extent#Point',function () {
    global.extent(global.pt);
  })
  .add('turf-extent2#Point',function () {
    global.extent2(global.pt);
  })
  .add('turf-extent#LineString',function () {
    global.extent(global.line);
  })
  .add('turf-extent2#LineString',function () {
    global.extent2(global.line);
  })
  .add('turf-extent#Polygon',function () {
    global.extent(global.poly);
  })
  .add('turf-extent2#Polygon',function () {
    global.extent2(global.poly);
  })
  .add('turf-extent#MultiLineString',function () {
    global.extent(global.multiLine);
  })
  .add('turf-extent2#MultiLineString',function () {
    global.extent2(global.multiLine);
  })
  .add('turf-extent#MultiPolygon',function () {
    global.extent(global.multiPoly);
  })
  .add('turf-extent2#MultiPolygon',function () {
    global.extent2(global.multiPoly);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();
