
function initMap() {

  var include_map = $('#map')

  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: myLatLng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Store',
  });

}
