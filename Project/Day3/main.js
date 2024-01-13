function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll untuk melihat";
  document.getElementId("icon-up").style.display = "none";
  document.getElementId("icon-down").style.display = "block";
}

function dayMode() {
  document.querySelector("body").style.color = "black";
  document.querySelector("body").style.backgroundColor = "white";
}
function niteMode() {
  document.querySelector("body").style.color = "white";
  document.querySelector("body").style.backgroundColor = "black";
}
function pinkMode() {
  document.querySelector("body").style.color = "black";
  document.querySelector("body").style.backgroundColor = "pink";
}
