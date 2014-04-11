var test = require('tape')
var fs = require('fs')
var extent = require('./')

test('extent', function(t){
  var fc = require('./geojson/FeatureCollection')
  console.log(fc.type)
  t.end()
})


