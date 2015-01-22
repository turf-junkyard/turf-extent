var each = require('turf-meta').coordEach;

/**
 * Takes any {@link GeoJSON} object, calculates the extent of all input features, and returns a bounding box.
 *
 * @module turf/extent
 * @param {GeoJSON} input any valid GeoJSON Object
 * @return {Array<number>} the bounding box of `input` given
 * as an array in WSEN order (west, south, east, north)
 * @example
 * var input = turf.featurecollection([
 *  turf.point([114.175329, 22.2524]),
 *  turf.point([114.170007, 22.267969]),
 *  turf.point([114.200649, 22.274641]),
 *  turf.point([114.186744, 22.265745])
 * ]);
 *
 * var bbox = turf.extent(input);
 *
 * var bboxPolygon = turf.bboxPolygon(bbox);
 * bboxPolygon.properties.fill = '#00f';
 *
 * var result = turf.featurecollection(
 *  input.features.concat(bboxPolygon));
 *
 * //=result
 */
module.exports = function(layer) {
    var extent = [Infinity, Infinity, -Infinity, -Infinity];
    each(layer, function(coord) {
      if (extent[0] > coord[0]) extent[0] = coord[0];
      if (extent[1] > coord[1]) extent[1] = coord[1];
      if (extent[2] < coord[0]) extent[2] = coord[0];
      if (extent[3] < coord[1]) extent[3] = coord[1];
    });
    return extent;
};
