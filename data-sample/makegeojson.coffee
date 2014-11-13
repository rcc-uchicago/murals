fs = require 'fs'

feature = (address, lat, lng) ->
      "type": "Feature"
      "properties": 
        "Address": address
      "geometry":
        "type": "Point"
        "coordinates": [ lng, lat ]

convert = (err, data) -> 
  geojson = 
    "type": "FeatureCollection"
    "features": []
  places = (JSON.parse(x) for x in data.toString().split('\n') when x)
  for p in places
    geojson.features.push(feature(p.address, p.coords.lat, p.coords.lng))
  console.log JSON.stringify(geojson)

fs.readFile 'locations.ndj', convert
  
