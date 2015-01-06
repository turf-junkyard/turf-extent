declare module GeoJSON {
    export interface GeoJsonObject
    { type: string; bbox?: number[]; crs?: CoordinateReferenceSystem; }
    export interface Position
    { [index: number]: number; }
    export interface GeometryObject extends GeoJsonObject
    { coordinates: any }
    export interface Point extends GeometryObject
    { coordinates: Position }
    export interface MultiPoint extends GeometryObject
    { coordinates: Position[] }
    export interface LineString extends GeometryObject
    { coordinates: Position[] }
    export interface MultiLineString extends GeometryObject
    { coordinates: Position[][] }
    export interface Polygon extends GeometryObject
    { coordinates: Position[][] }
    export interface MultiPolygon extends GeometryObject
    { coordinates: Position[][][] }
    export interface GeometryCollection extends GeoJsonObject
    { geometries: GeometryObject[]; }
    export interface Feature extends GeoJsonObject
    { geometry: GeometryObject; properties: any; id?: string; }
    export interface FeatureCollection extends GeoJsonObject
    { features: Feature[]; }
    export interface CoordinateReferenceSystem { type: string; properties: any; }
    export interface NamedCoordinateReferenceSystem extends CoordinateReferenceSystem
    { properties: { name: string } }
    export interface LinkedCoordinateReferenceSystem extends CoordinateReferenceSystem
    { properties: { href: string; type: string } }
}
