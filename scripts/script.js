document.addEventListener('DOMContentLoaded', function() {
  let aboutWin = document.getElementById("about-window");
  let videoWin = document.getElementById("video-window");
  let startTime = () => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    document.getElementById('time').innerHTML = h + ":" + m;
  }

//   document.querySelectorAll('.icon').forEach(function(el){
// el.addEventListener('click', function() {
//   console.log(document.getElementById(this.id));
// })});

  startTime();
  dragElement(aboutWin);
  dragElement(videoWin);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
}, false);

function openWindow () {
  document.getElementById("about-window").style.display = "block";
}

function openVideo () {
  document.getElementById("video-window").style.display = "block";
}

function aboutExit() {
  document.getElementById("about-window").style.display = "none";
}

function videoExit() {
  document.getElementById("video-window").style.display = "none";
}
