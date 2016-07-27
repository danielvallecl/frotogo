//  JS for Index Page Map //

function initIndexMap() {

  var include_map = $('#map')
  var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }

  var map = new google.maps.Map(include_map[0], {
    center: {lat: 43.6709, lng: -79.3859},
    zoom: 12
  });

  //Query to get information for the Checkbox//

  $(".store_category").on('click', function(){                //click listener for the Checkbox
    var search_term = ($(this).attr("name"))                  //this refers to the checkbox itself
    var search_regex = new RegExp(search_term, "i")           //Created a regular expression to make the string case insensitive
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
        icon: "/assets/icecreampin.png",
        title: query[i]["name"]
      });
      marker.addListener('click', toggleBounce);
      i++
    }
  });

  //Populating the Map with Multiple Icons//

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.DROP);
    }
  };
};






// var include_map;
// var google_maps;
//
// var baskin_robbins = $.grep(gon.stores, function( store, i ) {
//   return ( store.name.match(/Baskin/i))
//
// function displayCategory() {
//   var i = 0
//   while (i < gon.stores.length) {
//   $.grep(gon.stores, function( store, i ) {
//   return ( store.name.match(/Baskin/i))
// });
//
// function dropPin(store) {
//   var myLatLng = { lat: parseFloat(store["latitude"]), lng: parseFloat(store["longitude"]) }
//   var marker = new google_maps.Marker({
//     map: map,
//     draggable: true,
//     position: myLatLng,
//     animation: google_maps.Animation.DROP,
//     icon: "/assets/icecreampin.png",
//     title: 'Hello'
//   });
//   marker.addListener('click', toggleBounce);
// }
//
// function initIndexMap() {
//   $(document).ready(function(){
//     google_maps = google.maps
//     include_map = $('#map')
//
//     map = new google_maps.Map(include_map[0], {
//       center: {lat: 43.6709, lng: -79.3859},
//       zoom: 12
//     });
//
//     function toggleBounce() {
//       if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//       } else {
//         marker.setAnimation(google.maps.Animation.DROP);
//       }
//     };
//   })


/////////////////////

    // var baskin_robbins = $.grep(gon.stores, function( store, i ) {
    //   return ( store.name.match(/Baskin/i))
    // });
    //
    // var dairy_queen = $.grep(gon.stores, function( store, i ) {
    //   return ( store.name.match(/Baskin/i))

    //  while (i < gon.baskin_robbins.length) {
    //   var myLatLng = { lat: parseFloat(gon.baskin_robbins[i]["latitude"]), lng: parseFloat(gon.baskin_robbins[i]["longitude"]) }
    //   // var myLatLng = { lat: 43.6426 , lng: -79.3871 }
    //
    //   var marker = new google.maps.Marker({
    //     map: map,
    //     draggable: true,
    //     position: myLatLng,
    //     animation: google.maps.Animation.DROP,
    //     icon: "/assets/icecreampin.png",
    //     title: 'Hello'
    //   });
    //   marker.addListener('click', toggleBounce);
    //   i++
    // }


    // var map = new google.maps.Map(include_map[0], {
    //   center: {lat: 43.6709, lng: -79.3859},
    //   zoom: 12
    // });

    // i = 0
    // while (i < gon.stores.length) {
    // var myLatLng = { lat: parseFloat(gon.stores[i]["latitude"]), lng: parseFloat(gon.stores[i]["longitude"]) }
    // };

    // var include_map = $('#map')
    // var myLatLng = { lat: include_map.data('latitude'), lng: include_map.data('longitude') }
