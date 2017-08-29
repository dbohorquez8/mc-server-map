var map = L.map('js-map', {
  crs: L.CRS.Simple,
  minZoom: -4,
  maxZoom: -1
});

map.setMaxBounds([[-12288, -12288],[12288, 12288]]);
var bounds = [[-12288, -12288],[12288, 12288]];

var image = L.imageOverlay('map.png', bounds).addTo(map);
map.fitBounds(bounds);

map.setView([0, 0], -3);

function parseData(data) {
  var cells = data.feed.entry;
  var locations = [];
  $.each(cells, function (index, cell){
    if(cell.gs$cell.row !== "1") {
      if(locations[Number(cell.gs$cell.row) - 1] === undefined) locations[Number(cell.gs$cell.row) - 1] = {};
      locations[Number(cell.gs$cell.row) - 1][cell.gs$cell.col] = cell.gs$cell.$t;
    }
  });

  var markers = locations.map(function (location){
    var avatarUrl = location[3] === 'Spawn' ? 'spawn.png' : 'https://mcapi.ca/avatar/'+location[4]+'/96'
    L.marker(
      L.latLng([ Number(location[2]) * -1, Number(location[1]) ]), 
      {icon: new L.DivIcon({
        className: 'marker',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        html: '<a target="_blank" class="marker__link" '+(location[5] !== '#' ? 'href="'+location[5]+'"' : '')+'"><img class="marker__icon" src="'+avatarUrl+'"/>'+
              '<span class="marker__label">'+location[3]+'</span></a>'})
      })
      .addTo(map);
  });
};
var lat, lng;

map.addEventListener('mousemove', function(e) {
 lat = parseInt(e.latlng.lat);
 lng = parseInt(e.latlng.lng);
 $('.js-coordinates').text(lng + ', ' + lat * -1);
});

$('.js-toggle-legend').on('click', function (){
  $('.js-legend').toggleClass('hidden');
})