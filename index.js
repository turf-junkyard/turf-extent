/**
 * Calculates the extent of all features and returns a bounding box.
 *
 * @module turf/extent
 * @param {GeoJSON-Object} input - any valid GeoJSON Object
 * @return {Array<number>} extent - the bounding box of the GeoJSON given
 * as an array in WSEN order.
 * @example
 * var extent = require('turf-extent')
 * var fs = require('fs')
 * var fc = JSON.parse(fs.readFileSync('/path/to/myFeatureCollection.geojson'))
 * var bbox = extent(fc)
 * console.log(bbox) // [minX, minY, maxX, maxY]
 */
module.exports = function(layer){
  var extent = [Infinity, Infinity, -Infinity, -Infinity];

  var features = [];
  if (layer.type === 'FeatureCollection') features = layer.features;
  else if (layer.type === 'Feature') features = [layer];
  else features = [{ geometry: layer }];

  for(var i = 0; i < features.length; i++){
    var coords = features[i].geometry.coordinates;
    switch(features[i].geometry.type){
      case 'Point':
        extent0(coords, extent);
        break;
      case 'LineString':
      case 'MultiPoint':
        extent1(coords, extent);
        break;
      case 'Polygon':
      case 'MultiLineString':
        extent2(coords, extent);
        break;
      case 'MultiPolygon':
        extent3(coords, extent);
        break;
      default:
        return new Error('Unknown Geometry Type');
    }
  }
  return extent;
};

function extent0(coord, extent) {
  if(extent[0] > coord[0]) extent[0] = coord[0];
  if(extent[1] > coord[1]) extent[1] = coord[1];
  if(extent[2] < coord[0]) extent[2] = coord[0];
  if(extent[3] < coord[1]) extent[3] = coord[1];
}

function extent1(coords, extent) {
  for(var i = 0; i < coords.length; i++){
    var coord = coords[i];
    if(extent[0] > coord[0]) extent[0] = coord[0];
    if(extent[1] > coord[1]) extent[1] = coord[1];
    if(extent[2] < coord[0]) extent[2] = coord[0];
    if(extent[3] < coord[1]) extent[3] = coord[1];
  }
}

function extent2(coords, extent) {
  for(var i = 0; i < coords.length; i++){
    for(var j = 0; j < coords[i].length; j++){
      var coord = coords[i][j];
      if(extent[0] > coord[0]) extent[0] = coord[0];
      if(extent[1] > coord[1]) extent[1] = coord[1];
      if(extent[2] < coord[0]) extent[2] = coord[0];
      if(extent[3] < coord[1]) extent[3] = coord[1];
    }
  }
}

function extent3(coords, extent) {
  for(var i = 0; i < coords.length; i++){
    for(var j = 0; j < coords[i].length; j++){
      for(var k = 0; k < coords[i][j].length; k++){
        var coord = coords[i][j][k];
        if(extent[0] > coord[0]) extent[0] = coord[0];
        if(extent[1] > coord[1]) extent[1] = coord[1];
        if(extent[2] < coord[0]) extent[2] = coord[0];
        if(extent[3] < coord[1]) extent[3] = coord[1];
      }
    }
  }
}
