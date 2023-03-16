var date = new Date();
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var des = " --- DESCRIPTION : ";
  var inputValuedesc = document.getElementById("myInputarea").value;
 var send = "TASK:"+inputValue+des+inputValuedesc+"   --- ADDED ON:"+date.toISOString();
  var t = document.createTextNode(send);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Enter something to ADD TASK");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("myInputarea").value = "";
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var nodes = document.getElementsByTagName("li");
var i;
for (i = 0; i < nodes.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodes[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
