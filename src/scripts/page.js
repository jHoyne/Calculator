//Global Variables
var count = 0;
//Clears Value of 'final'
function reset() {
    count = 0;
    document.getElementById('final').innerHTML = count;
    if (count !== 0);
    count = count;
    console.log("Cleared Count");
    console.log(count);
}
// Enables Dev Mode
function EnableDevMode(){
    var docHead = document.head;
    var script = document.createElement ('script');
    script.type = 'text/javascript';
    script.src = 'scripts/debug.js';
    script.async = false;
   
    docHead.removeChild (script);
}
// Toggle Basic
function toggle_visibility_basic() {
   var element = document.getElementByClassName("basic");
   if(element.style.display == 'block')
      element.style.display = 'none';
   else
      element.style.display = 'block';
}
// Toggle Fraction
function toggle_visibility_fraction(){
    var element = document.getElementByClassName("fraction");
    if(element.style.display == 'block')
       element.style.display = 'none';
    else
       element.style.display = 'block';
}