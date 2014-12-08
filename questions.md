## questions

Is the following summary of the situation correct?

You're seeking as an interactive data visualization where the basic entities for which you have data are:
  * sites
  * artists
  * images

The visualization should map mural sites and enable the viewer to filter the
collection of mural images by a particular set of image features (site, region,
artist, date, etc.)

If so ...

* who is the primary audience for this data visualization?
* can you provide a few use cases?
* what image features do you want to use for filtering?
* do you want to filter by specifying *combinations* of feature constraints?

For the current collection ...

* how many mural locations?
* how many images?
* how many images per location?


## entities

* artists (id, ...)
* sites (id, lat, lon, type, ...)
* images (id, artist, site, ...)
