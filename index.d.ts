/// <reference path="./geojson.d.ts" />

/**
 * Calculates the extent of all features and returns a bounding box.
 */
declare function extent(input: GeoJSON.GeoJsonObject): Array<number>;
