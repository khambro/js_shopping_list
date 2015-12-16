window.onload = function () {

  var container = document.getElementById("container");
  var lister = document.getElementById("lister");
  var item  = document.getElementById("item");
  var itemsDiv = document.getElementById("items");
  var complete = document.getElementById("complete");
  var listed = document.getElementById("listed");


  container.addEventListener("submit", function (event) {
    event.preventDefault();
    var ul = document.getElementById("listed");
    var item  = document.getElementById("item");
    var li = document.createElement("li");
    var button= document.createElement("button");
    li.setAttribute("id","li"); // added line
    li.appendChild(document.createTextNode(item.value));
    button.className="complete";
    button.id="complete"
    button.innerHTML="✔";
    li.appendChild(button);
    ul.appendChild(li);
    item.value = "";

  });

  itemsDiv.addEventListener("click", function (event) {
    event.preventDefault();
    var ul = document.getElementById("listed");
    var li = document.getElementById("li");
    li.style.color = 'gray';
    ul.appendChild(li);



  });





  // complete.addEventListener("submit", function (event))
  //
  //


};
