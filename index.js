var each = require('turf-meta').coordEach;

/**
 * Calculates the extent of all input features and returns a bounding box.
 *
 * @module turf/extent
 * @param {GeoJSON-Object} input any valid GeoJSON Object
 * @return {Array<number>} the bounding box of the GeoJSON given
 * as an array in WSEN order (west, south, east, north)
 * @example
 * var pt1 = turf.point(114.175329, 22.2524);
 * var pt2 = turf.point(114.170007, 22.267969);
 * var pt3 = turf.point(114.200649, 22.274641);
 * var pt4 = turf.point(114.186744, 22.265745);
 * var fc = turf.featurecollection(
 *  [pt1, pt2, pt3, pt4]);
 *
 * var bbox = turf.extent(fc);
 * console.log(bbox); //
 *
 * var bboxPolygon = turf.bboxPolygon(bbox);
 * bboxPolygon.properties.fill = '#00f';
 *
 * var result = turf.featurecollection(
 *  fc.features.concat(bboxPolygon));
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
