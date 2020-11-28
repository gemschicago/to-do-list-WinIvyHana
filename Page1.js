
            
            var inputText = document.getElementById("txt"),
                 items = document.querySelectorAll("#list li"),
                 tab = [], index;
         
             // get the selected li index using array
             // populate array with li values
             
             for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
             }
             
             // get li index onclick
             for(var i = 0; i < items.length; i++){
                 
                 items[i].onclick = function(){
                     index = tab.indexOf(this.innerHTML);
                     console.log(this.innerHTML + " INDEX = " + index);
                     // set the selected li value into input text
                     inputText.value = this.innerHTML;
                 };
                 
             }
            
            function refreshArray()
            {
                // clear array
                tab.length = 0;
                items = document.querySelectorAll("#list li");
                // fill array
                for(var i = 0; i < items.length; i++){
                 tab.push(items[i].innerHTML);
               }
            }
            function addLI(){
                
                var listNode = document.getElementById("list"),
                    textNode = document.createTextNode(inputText.value),
                    liNode = document.createElement("LI");
                    
                    liNode.appendChild(textNode);
                    listNode.appendChild(liNode);
                    
                    refreshArray();
                    
                    // add event to the new LI
                    
                    liNode.onclick = function(){
                     index = tab.indexOf(liNode.innerHTML);
                     console.log(liNode.innerHTML + " INDEX = " + index);
                     // set the selected li value into input text
                     inputText.value = liNode.innerHTML;
                 };
                    
             }
             
             function editLI(){
                 // edit the selected li using input text
                 items[index].innerHTML = inputText.value;
                 refreshArray();
              }
              
              function deleteLI(){
                  
                      refreshArray();
                      if(items.length > 0){
                          items[index].parentNode.removeChild(items[index]);
                          inputText.value = "";
                      }
              }

              function clearLI(){
                  
                      refreshArray();
                      if(items.length > 0){
			for (i = 0; i < items.length; i++) {
                          //items[index].parentNode.removeChild(items[index]);
				items[i].parentNode.removeChild(items[i]);
                          inputText.value = "";
				}
                      }
              }


function sortLI() {

  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("list");

  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");

    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item: */
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