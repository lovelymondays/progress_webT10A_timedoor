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

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  // Check the inputed value
  if (inputValue === "" || inputValue === "") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }
  // Clear text on the search bar
  document.getElementById("myInput").value = "";
  // Create button close
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");
  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
