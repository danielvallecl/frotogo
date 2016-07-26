
//JS for Show Page Map //

function initShowMap() {

  var include_map = $('#map')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: myLatLng,
    zoom: 0
  });

  var marker = new google.maps.Marker({
    map: map,
    draggable: true,
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    icon: "/assets/icecreampin.png",
    title: include_map.data('name')
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.DROP);
  }
}
