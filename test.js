var test = require('tape')
var fs = require('fs')
var extent = require('./')

// test data
var fc = require('./geojson/FeatureCollection')
var pt  = require('./geojson/Point')


test('extent', function(t){
  var fc = require('./geojson/FeatureCollection')
  console.log(fc.type)
  t.end()
})


