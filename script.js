var card = document.getElementById("opencard");
var popup = document.getElementById("popupcard");
var body = document.querySelector("body");
card = addEventListener("click",function(){
popup.style.display = "block";

});

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }}