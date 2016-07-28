
//JS for Show Page Map which shows an Invididual Map //

function initShowMap() {

  var include_map = $('#map')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: myLatLng,
    zoom: 15
  });

  var include_map = $('#map')
  var contentString = include_map.data('name')

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    map: map,
    draggable: false,
    position: myLatLng,
    animation: google.maps.Animation.DROP,
    icon: "/assets/icecreampin.png",
    title: include_map.data('name')
  });
  marker.addListener('click', function() {
  infowindow.open(map, marker);
  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
};

function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function() {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  };
