# Minecraft Server Map

This app uses [Leaflet.js](http://leafletjs.com/) to display the bases and important locations of a Minecraft server in a zoomable map. The locations are stored in a Google Spreadsheet and the players' avatars are taken from an [API](https://docs.gameapis.net/docs/mc/query), using the in-game-names (IGN).

The spreadsheet follows this format:
```x, z, Map Label, IGN, URL (Optional)```

The map's image is made by stitching together screenshots taken from [Amidst](https://github.com/toolbox4minecraft/amidst).

See the map in action at [http://seraphiccraft.surge.sh/](http://seraphiccraft.surge.sh/)