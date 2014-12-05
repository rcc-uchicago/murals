# Requirements

The following is a distillation of the full [feature wishlist](https://docs.google.com/document/d/1H4wqqPB85Xbm7w-PLNK3vQJEP7w5Ux0YfVOeBMQavMA/edit).


## Display

* markers for each mural location (color-coded by artist)
* markers for alternative location types (events, theaters) 
* table of image records (result set)


## Filtering

Map markers and image records can be filtered by ...
* artist
* creation date (date range)
* whether extant or not

In general we can filter on any numeric, date, or categorical attribute type.


## Updating

Data updates could be handled via periodic batch updates (CSV tables of new records).

Alternatively, the project could host the mural metadata on [cartodb](http://docs.cartodb.com/cartodb-editor.html#tables) and use cartodb for updating/editing records.

For even greater flexibility, it's possible to [sync your cartodb data](http://docs.cartodb.com/cartodb-editor.html#syncing-tables) with externally hosted tables (spreadsheet files) on Google Drive or Dropbox.  That makes it possible to setup a public or semi-public Google Spreadsheet that can be updated by many users (independently of cartodb), while remaining synced with the cartodb data.
