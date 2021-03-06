window.onload = function () {

  var container = document.getElementById("container");
  // var lister = document.getElementById("lister");
  var item  = document.getElementById("item");
  var itemsDiv = document.getElementById("items");
  var complete = document.getElementById("complete");
  var listed = document.getElementById("listed");
  item.focus();


  container.addEventListener("submit", function (event) {
    event.preventDefault();
    var ul = document.getElementById("listed");
    var item  = document.getElementById("item");
    var date  = document.getElementById("due");
    var li = document.createElement("li");
    var due = document.createElement("span");
    var button= document.createElement("button");
    var erase= document.createElement("button");
    li.setAttribute("id","li"); // added line
    due.setAttribute("id","due");
    li.appendChild(document.createTextNode(item.value));
    due.innerHTML = date.value;
    li.appendChild(due);
    erase.className="erase";
    erase.id="erase";
    erase.innerHTML="✘";
    button.className="complete";
    button.id="complete";
    button.innerHTML="✔";
    li.appendChild(button);
    li.appendChild(erase);
    ul.appendChild(li);
    item.value = "";
    date.value = "";
    item.focus();

      button.addEventListener("click", function (event) {
        event.preventDefault();
        var date  = document.getElementById("due");
        this.parentNode.style.color = 'gray';
        this.parentNode.style.setProperty("text-decoration", "line-through");
        this.previousSibling.remove();
        this.parentNode.parentNode.appendChild(this.parentNode);
        this.parentNode.appendChild;
        this.remove();
        item.focus();
      });

      erase.addEventListener("click", function (event) {
        event.preventDefault();
        this.innerHTML = "remove item";
        var goAway = this;
          goAway.addEventListener("click", function (event) {
            event.preventDefault();
            erase.parentNode.remove(li);
            item.focus();
        });
      });



  });




  };
