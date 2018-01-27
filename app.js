// Map Options
/*
mapUrl: the URL of the map image. This can either be a relative path or a URL.
mapBounds: the coordinates of the top left corner and the bottom right of the area displayed on your map image: [[x1, z1],[x2, z2]].
spreadsheetKey: the key of the Google Spreadsheet: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_KEY/edit?ts=59e2ad25#gid=0
*/

const options = {
  mapUrl: 'map.png',
  mapBounds: [
    [-12288, -12288],
    [12288, 12288]
  ],
  spreadsheetKey: 'YOUR_SPREADSHEET_KEY'
}

// Initialize Leaflet map

let map = L.map('js-map', {
  crs: L.CRS.Simple,
  minZoom: -4,
  maxZoom: -1
});

const bounds = [options.mapBounds];
map.setMaxBounds(bounds);

const image = L.imageOverlay(options.mapUrl, bounds).addTo(map);
map.fitBounds(bounds);

map.setView([0, 0], -3);

// Callback to parse spreadsheet data and convert it to markers

function parseData(data) {
  let cells = data.feed.entry;
  let locations = [];
  $.each(cells, function (index, cell){
    if(cell.gs$cell.row !== "1") {
      if(locations[Number(cell.gs$cell.row) - 1] === undefined) locations[Number(cell.gs$cell.row) - 1] = {};
      locations[Number(cell.gs$cell.row) - 1][cell.gs$cell.col] = cell.gs$cell.$t;
    }
  });

  let markers = locations.map(function (location){
    let avatarUrl = location[3] === 'Spawn' ? 'spawn.png' : 'https://mcapi.ca/avatar/'+location[4]+'/96'
    L.marker(
      L.latLng([ Number(location[2]) * -1, Number(location[1]) ]), 
      {icon: new L.DivIcon({
        className: 'marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<div class="marker__container">'+
                '<img class="marker__icon" src="'+avatarUrl+'"/>'+
                '<span class="marker__label">'+location[3]+'</span>'+
              '</div>'})
      })
      .addTo(map);
  });
};

// Coordinates display

let lat, lng;

map.addEventListener('mousemove', function(e) {
 lat = parseInt(e.latlng.lat);
 lng = parseInt(e.latlng.lng);
 $('.js-coordinates').text(lng + ', ' + lat * -1);
});

// Legend

$('.js-toggle-legend').on('click', function (){
  $('.js-legend').toggleClass('hidden');
})

// Call Google Spreadsheet with parseData as callback

$.getScript("https://spreadsheets.google.com/feeds/cells/"+options.spreadsheetKey+"/1/public/values?alt=json-in-script&callback=parseData");
