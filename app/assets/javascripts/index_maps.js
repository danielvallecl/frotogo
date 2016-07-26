//  JS for Index Page Map //

function initIndexMap() {

  var include_map = $('#map')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: {lat: 43.6709, lng: -79.3859},
    zoom: 12
  });

  console.log(gon.baskin_robbins)

  var i = 0

  while (i < gon.baskin_robbins.length) {
    var myLatLng = { lat: parseFloat(gon.baskin_robbins[i]["latitude"]), lng: parseFloat(gon.baskin_robbins[i]["longitude"]) }
    // var myLatLng = { lat: 43.6426 , lng: -79.3871 }
    var marker = new google.maps.Marker({
      map: map,
      draggable: true,
      position: myLatLng,
      animation: google.maps.Animation.DROP,
      icon: "/assets/icecreampin.png",
      title: 'Hello'
    });
    marker.addListener('click', toggleBounce);
    i++
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.DROP);
    }
  };
};
