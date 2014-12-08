## questions

Is the following summary of the situation correct?

You have a large collection of mural images and you'd like a web-based tool for
exploring this collection.

The basic entities for which you have data are:
* sites
* artists
* **images**

The tool envisioned is a single-page web app that would enable the user to filter the collection by a particular set of image features (site, region, artist, date, etc.)

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
