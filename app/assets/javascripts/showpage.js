//JS for the Show Page//

//Makes the Main Logo Drop Down//

console.log("I'm outside!")

$( document ).ready(function() {
  console.log("Ready");
  setTimeout(function() {
    console.log("Test");
    document.getElementById("logo_div").className = 'slideDown';
  });
});
