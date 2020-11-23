function AddList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
}

function ClearList() { 
  //alert("You must write something!");
  var list = document.getElementById("myUL");
//list.removeChild(list.lastChild);
//  while (list.firstchild){
//    li.removeChild(list.lastChild);
  //list.removeChild(list.ChildNodes[0]);
//}


//window.emptyList = function () {
 // var ul = document.querySelector('.list');
  var listLength = list.children.length;

  for (i = 0; i < listLength; i++) {
    list.removeChild(list.children[0]);
  }





}


function SortList() {

  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("myUL");
  switching = true;
  while (switching) {
    //alert("You must write something!");
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      //alert("You must write something!");
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}
