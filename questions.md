## questions

* Who is the primary audience for this data visualization?
* Can you provide a few use cases?

For the current collection ...

* How many mural locations?
* How many images?
* How many images per location?

---

Is the following summary of the situation correct?

You have a large collection of mural images and you'd like a web-based tool for
exploring this collection.

The basic entities for which you have data are:
* sites
* artists
* **images**

The tool envisioned is a single-page web app that would enable the user to filter the collection by a particular set of image features (site, region, artist, date, etc.).  

In particular, the web app should enable the user to filter the collection by mural site.  Mural sites should be represented by markers on a map of the Chicago region.  If a user clicks on a mural site, the table of images should be updated to only list images related to the site clicked.

If so ...

* what image features (other than site/location) do you want to use 
  for filtering?
* do you want to filter by specifying *combinations* of feature constraints?


## entities

* artists (id, ...)
* sites (id, lat, lon, type, ...)
* images (id, artist, site, ...)
