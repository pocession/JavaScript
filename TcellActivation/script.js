function TCellMove () {
  var element = document.querySelectorAll('img[id^="Tcells"]');
  console.log("element: ",element)
  for (var j = 0; j < element.length; j++) {
    (function(j){
      var pos = 0;
      var move = setInterval(frame,10)

      function frame() {
        if (pos == 400) {
          clearInterval(move)
        }
        else {
          pos++;
          element[j].style.top = pos + "px";
          element[j].style.left = pos + "px";
        }
      }
    })(j)
  }

}

var i = 0
function TCellProliferate () {
  console.log("Proliferate!")
  var element = document.getElementById('Tcells')
  var clone = element.cloneNode(true); //deep clone
  clone.id = 'Tcells'+'clone'+ i++; //give each clone an unique id
  element.parentNode.appendChild(clone)
}
