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

function changeImage(element) {
  element.setAttribute(
    "src",
    "https://statik.tempo.co/data/2023/09/12/id_1236504/1236504_720.jpg"
  );
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://cms.dmpcdn.com/cdn-cgi/image/fit=cover,quality=85,f=auto/https://cms.dmpcdn.com/article/2021/05/06/8e23d250-ae49-11eb-ae11-cf473c2984b4_original.jpg"
  );
}

function changeText2() {
  document.querySelector(".jumbotron-title").innerHTML = "Kambinggggggg !!!!!!";
}
