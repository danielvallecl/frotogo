
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

for( i = 0; i < gon.baskin_robbins.length; i++ ) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);
      var latitude = gon.baskin_robbins[i]["latitude"]
      var longitude = gon.baskin_robbins[i]["longitude"]
      marker = new google.maps.Marker({
          position: LatLng,
          map: map,
          title:
          animation: google.maps.Animation.DROP,
      });
      marker.addListener('click', toggleBounce);
    }
