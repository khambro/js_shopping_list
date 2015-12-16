window.onload = function () {

  var container = document.getElementById("container");
  var lister = document.getElementById("lister");
  var item  = document.getElementById("item");
  var itemsDiv = document.getElementById("items");

  container.addEventListener("submit", function (event) {
    event.preventDefault();
    var ul = document.getElementById("listed");
    var item  = document.getElementById("item");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    // li.setAttribute("id", "element4"); // added line
    ul.appendChild(li);
    item.value= ""
  });






};
