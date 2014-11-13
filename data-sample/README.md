# 2014-11-13 

Bridget Madden provided a sample data file containing records of mural images and their locations. She writes ...

> Our location data tends to be descriptive, for example: 550th Street between Champlain and St. Lawrence. Rebecca [Zorach] selected 9 murals that are in different parts of the city to give a representative sample and I've included the data records for all associated records. It turned out to be 215 images & data records representing overviews, details, different panels/sections, etc.

As mentioned, the location data is only descriptive.  No geocoding was provided, so we wanted to determine how difficult it would be to geocode the location descriptions and render the resulting geocoordinates on a map along with the provided address info.

![map](map.png)

You can see the resulting geojson/map [here](https://gist.github.com/anonymous/bf00295ee7e52e4cde9b).


## Process

The provided sample was CSV formatted with embedded commas, so we converted it to TSV-format ([`data.tsv`](data.tsv) to enable easy column cutting from the command line (`cut -f 8 data.tsv`).

The first order of business was to extract out the unique locations (`cut -f 8 data.tsv | sort | uniq > places.txt`) and determine their geocoordinates.  We wrote a little script, [`geocode.js`](geocode.js), to do this, which utilizes Google's geocoding API.
We used this script to output [`locations.ndj`](locations.ndj), a newline-delimited JSON file containing the provided addresses along with their geocoordinates.

The last step was to convert the derived geocoded data to valid [geojson](http://geojson.org/).  Our little [`makegeojson.coffee`](makegeojson.coffe) script was used to convert the `locations.ndj` data into [`data.geojson`](data.geojson).
