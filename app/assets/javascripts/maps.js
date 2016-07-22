
function initMap() {

  include_map = $('#map')
  lat = include_map.data('latitude')
  lng = include_map.data('longitude')

  map = new google.maps.Map(include_map[0], {
    center: {lat: lat, lng: lng},
    zoom: 18
  });
}
