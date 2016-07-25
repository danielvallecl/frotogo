
//JS for Show Page Map //

function initMap() {

  var include_map = $('#map_show')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: myLatLng,
    zoom: 15
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

//  JS for Index Page Map //

var query = $(".frotogo_stores")
var queries = {name: include_query.data('name'), lat: include_query.data('latitude'), lng: include_query.data('longitude')}

for( i = 0; i < query.length; i++ ) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);
      marker = new google.maps.Marker({
          position: queries,
          map: map,
          title: include_query.data('name')
          animation: google.maps.Animation.DROP,
      });
      marker.addListener('click', toggleBounce);
    }
