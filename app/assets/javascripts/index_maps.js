// =========== JS for Index Page Map ========== //

function initIndexMap() {

  window.pins = {};

  var include_map = $('#map')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: {lat: 43.6709, lng: -79.3859},
    zoom: 12
  });

  //Query to get information for the Checkbox//

  $(".store_category").on('click', function(){                //click listener for the Checkbox
    console.log($(this).is(':checked'));
    var search_term = ($(this).attr("name"))                  //this refers to the checkbox itself
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
        optimized: false
      });

        $("#jquery_target").after(
        '<div class="new_div">' +
        '<ul class="store_description">' +
        '<li>Store Name:' + " " + query[i]["name"] + '</li>' +
        '<li>Address:</li>' +
        '<li>Phone:</li>' + query[i]["display_phone"].slice(3) +
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
