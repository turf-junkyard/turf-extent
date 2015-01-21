# turf-extent

[![build status](https://secure.travis-ci.org/Turfjs/turf-extent.png)](http://travis-ci.org/Turfjs/turf-extent)

turf extent module


### `turf.extent(input)`

Calculates the extent of all input features and returns a bounding box.


* `input` (`GeoJSON`): any valid GeoJSON Object

```js
var pt1 = turf.point(114.175329, 22.2524);
var pt2 = turf.point(114.170007, 22.267969);
var pt3 = turf.point(114.200649, 22.274641);
var pt4 = turf.point(114.186744, 22.265745);
var fc = turf.featurecollection(
 [pt1, pt2, pt3, pt4]);

var bbox = turf.extent(fc);
console.log(bbox); //

var bboxPolygon = turf.bboxPolygon(bbox);
bboxPolygon.properties.fill = '#00f';

var result = turf.featurecollection(
 fc.features.concat(bboxPolygon));

//=result
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-extent
```

## Tests

```sh
$ npm test
```

