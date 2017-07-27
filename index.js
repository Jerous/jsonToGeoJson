var GeoJSON = require('geojson');
var data = require('../jsontogeojson/newTaipeiBike.json');
var fs = require('fs');

var output = JSON.stringify(GeoJSON.parse(data.result.records, {Point: ['lat', 'lng'], include: ['sna', 'sarea', 'ar']}));

fs.writeFile('dist/geoJson.js', 'eqfeed_callback(' + output + ')', function (err) {
  if (err) return console.log(err);
  console.log('finish!!!');
});