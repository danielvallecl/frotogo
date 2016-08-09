//Makes the Main Logo Drop Down//

$( document ).ready(function() {
  setTimeout(function() {
    document.getElementById("logo_div").className = 'slideDown';
  });
});


var rotation = function (){
   $("#store_image").rotate({
    angle:0,
    animateTo:360,
    callback: rotation
   });
}
rotation();
