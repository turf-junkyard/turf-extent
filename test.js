var test = require('tape')
var fs = require('fs')
var extent = require('./')

// test data
var fc = require('./geojson/FeatureCollection')
var pt  = require('./geojson/Point')
var line = require('./geojson/LineString')
var poly = require('./geojson/Polygon')
var multiLine = require('./geojson/MultiLineString')
var multiPoly = require('./geojson/MultiPolygon')

test('extent', function(t){
  var fcExtent = extent(fc)

  t.ok(fcExtent)
  t.equal(fcExtent[0], 20)
  t.equal(fcExtent[1], -10)
  t.equal(fcExtent[2], 130)
  t.equal(fcExtent[3], 4)


  var ptExtent = extent(pt)
  var lineExtent = extent(line)
  var polyExtent = extent(poly)
  var multiLineExtent = extent(multiLine)
  var multiPolyExtent = extent(multiPoly)



  t.end()
})


