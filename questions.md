# Questions

* Who is the primary audience for this data visualization?
* Can you provide a few use cases?

For the current collection ...

* How many mural locations?
* How many images?
* How many images per location?


## Main purpose of the desired tool

Is the following summary of the situation correct?

You have a large collection of mural images and you'd like **a web-based that
would enable other researchers to explore this collection.**

The basic entities for which you have data are:
* sites
* artists
* **images** 

The tool envisioned is **a single-page web app that would enable the user to filter the collection by a particular set of image features (site, region, artist, date, etc.).**

In particular, the web app should **enable the user to filter the collection by mural site.**  Mural sites should be represented by markers on a map of the Chicago region.  If a user clicks on a mural site, the table of images should be updated to only list images related to the site clicked.

If so ...
* what image features (other than site/location) do you want to use 
  for filtering?
* do you want to filter by specifying *combinations* of feature constraints?


## Basic UI

As for the basic user interface, would the following suffice?

* upper half of page reflects image filtering widgets
  * a map of the chicago region with image markers would be the dominant widget
  * the map would be updated when filtering criteria are applied
* lower half of page reflects image result set (based on current filter criteria)
  * this would be a table, one image record per row
  * each row would contain a thumbnail image and associated image features
  * the default result set would be all available images
