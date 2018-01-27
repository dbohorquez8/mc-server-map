# Minecraft Server Map

This app uses [Leaflet.js](http://leafletjs.com/) to display the bases and important locations of a Minecraft server in a zoomable map. The locations are stored in a Google Spreadsheet and the players' avatars are taken from an [API](https://docs.gameapis.net/docs/mc/query), using the in-game-names (IGN).

The spreadsheet follows this format:
```x, z, Map Label, IGN, URL (Optional)```

The map's image is made by stitching together screenshots taken from [Amidst](https://github.com/toolbox4minecraft/amidst).

See the map in action at [http://seraphiccraft.surge.sh/](http://seraphiccraft.surge.sh/)

## Configuration Options

Change the following values in `app.js`:

```
const options = {
  mapUrl: 'map.png',
  mapBounds: [
    [-12288, -12288],
    [12288, 12288]
  ],
  spreadsheetKey: 'YOUR_SPREADSHEET_KEY'
}
```

`mapUrl`: the URL of the map image. This can either be a relative path or a URL.

`mapBounds`: the coordinates of the top left corner and the bottom right of the area displayed on your map image: `[[x1, z1],[x2, z2]]`.

`spreadsheetKey`: the key of the Google Spreadsheet: `https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_KEY/edit?ts=59e2ad25#gid=0`
