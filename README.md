turf-extent
===========
[![Build Status](https://travis-ci.org/Turfjs/turf-extent.svg?branch=master)](https://travis-ci.org/Turfjs/turf-extent)

Calculates the extent of all features and returns a bounding box.

```javascript
var extent = require('turf-extent')
var fs = require('fs')

var fc = JSON.parse(fs.readFileSync('/path/to/myFeatureCollection.geojson'))

var bbox = extent(fc)
    
console.log(bbox) // [minX, minY, maxX, maxY]
```