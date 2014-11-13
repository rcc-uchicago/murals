# Map filtering demos

For a small set of filters (where you don’t need to filter based on multiple dimensions), it’s straightforward with the `mapbox.js` api (based on leaflet) by using the [`setFilter` function](https://www.mapbox.com/mapbox.js/example/v1.0.0/filtering-markers/).

If you want more flexible filtering based on a user specified combination of data dimensions (e.g., artists producing more than 10 murals from the southwest region), we’d want to use `crossfilter.js`. 


## Crossfilter + D3 Demos

* [census explorer](http://yuri.io/census/)
* [canadian crime stats](http://dc-js.github.io/dc.js/crime/index.html)
* [threat tracking](http://threatwiki.thesentinelproject.org/iranvisualization)
* [nashville permits](http://cmvee.github.io/Nashville-Building-Permits/)


## See Also

Crosslet is a little geoviz tool built off of leaflet, crossfilter, and D3.

[Palladio’s](http://palladio.designhumanities.org/sample/#/visualization) mapping/filtering tools are fantastic, but they still haven’t open sourced it ye
