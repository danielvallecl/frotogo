// =========== JS for Index Page Map ========== //

function initIndexMap() {

  window.pins = {};
  window.marker_array = [];

  var include_map = $('#map')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: {lat: 43.6709, lng: -79.3859},
    zoom: 12
  });

  //Adds Geolocation Functionality //

  var mymarker = new google.maps.Marker({
    map: map,
    draggable: false,
    animation: google.maps.Animation.DROP,
    icon: "/assets/person.png",
    title: "You are here",
    optimized: false
  });

  $(".mylocator").on('click', function(){ //click listener for the Geolocation

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        mymarker.setPosition(pos);
        map.setCenter(pos);
        map.setZoom(12);
        map.panTo (pos);
      }, function() {
        var infoWindow = new google.maps.InfoWindow({map: map,
      });
        handleLocationError(true, infoWindow, map.getCenter());
      });
    }
    else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'You have blocked your location.' :
                          "Error: Your browser doesn't support geolocation.");
  }


  //Query to get information for the Checkbox//

  $(".store_category").on('click', function(){                //click listener for the Checkbox
    console.log($(this).is(':checked'));
    var search_term = ($(this).attr("value"))                  //this refers to the checkbox itself
    var search_regex = new RegExp(search_term, "i")           //Created a regular expression to make the string case insensitive
    if ($(this).is(':checked')) {                              //Started an if statement
      window.pins[search_regex] = [ ];
      var query = $.grep(gon.stores, function( store, i ) {
        return ( store.name.match(search_regex))                //adding Regular Expression
      });

  //Iterating over query while populating the map//

    var i = 0
    while (i < query.length) {
      var myLatLng = { lat: parseFloat(query[i]["latitude"]), lng: parseFloat(query[i]["longitude"]) }
      var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        position: myLatLng,
        animation: google.maps.Animation.DROP,
        icon: "/assets/icecreampintrans.png",
        title: query[i]["name"],
        optimized: false,
      });

      var windowContent = "</br> <a href=/stores/" + query[i]['id'] + ">" + query[i]['name'] + "</a>  </br>" + query[i]['location_address']
      var infoWindow = new google.maps.InfoWindow({
        position: myLatLng,
        content: windowContent
      });

      window.marker_array.push({marker: marker, infoWindow: infoWindow})
      marker.addListener('click', function() {
        for (var i = 0; i < window.marker_array.length; i++) {
          if (window.marker_array[i].marker == this) {
          window.marker_array[i].infoWindow.open(map, window.marker_array[i].marker)
          }
        };
      });

      //Divs that Appear after Selection//

        $("#jquery_target").after(
        '<div class="new_div">' +
        '<ul class="store_description">' +
        '<li>Store Name:' + " " + query[i]["name"] + '</li>' +
        '<li>Address:</li>' + query[i]["location_address"] +
        '<li>Phone:</li>' + query[i]["display_phone"] +
        '<li>Rating:</li> <img src=' + query[i]["rating_img_url"] + '>' +
        '</ul>' +
        '</div>');

      //Hide the first flash of the icon, then switch to real icon after 150ms
      var changeIcon = function (){
        this.setIcon('/assets/icecreampin.png');
      }
      setTimeout(changeIcon.bind(marker), 150);

      window.pins[search_regex].push(marker)
      i++
    }

  } else {
    window.pins[search_regex].map(function(store) { store.setMap(null) })   //this deletes the pins from the screen
  }
});

//Loop through the object because .map only works on arrays//

  $(".uncheck_all").on('click', function() {
    for ( var store in window.pins) {
      window.pins[store].map(function(store) {store.setMap(null)
      });
    }
    $(".new_div").remove();
  });
};
