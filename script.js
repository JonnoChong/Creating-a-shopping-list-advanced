//INITIAL SETUP FOR ENTERING LIST ITEMS
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//LOOKS AT THE LENGTH OF OUR INPUT. IMPORTANT FOR MAKING SURE WE DON'T ENTER BLANK SHOPPING LISTS LATER
function inputLength(){
    return input.value.length;
}

//CREATES A LIST VALUE
function createListElement(){
    var div = document.createElement("div");
    var li = document.createElement("li");
    // This var li and div has to go in the function, otherwise when we put new items in, it won't create a separate li for it. 
    li.appendChild(document.createTextNode(input.value));
    //createTextNode is what we are appending to the li. Input we get from the variable above, and if we want the value, we just do .value
    div.appendChild(li);
    ul.appendChild(div);
    input.value="";
    li.addEventListener("click", crossListOff)
    // This allows for new lines to be able to be crossed of the list
}

//FUNCTION TO ADD LIST AFTER CLICK
function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}
//FUNCTION TO ADD LIST AFTER ENTER
function addListAfterKeyPress(event){
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

//EVENT LISTENERS FOR CLICK AND ENTER
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);




// SETUP FOR TOGGLING ON AND OFF LIST ITEMS ALREADY IN HTML. FIRST 2 LINES CAN BE DELETED IF BLANK LIST
var list = document.getElementsByTagName("li");

for (var i=0; i<list.length; i++) {
    list[i].addEventListener("click", crossListOff);
}

function crossListOff(){
    this.classList.toggle("done");
}



//SETUP FOR DELETING THE LI IF DELETE BUTTON IS PRESSED 
// var deleteBtn = document.getElementsByClassName("deleteBtn");

// for (var i=0; i<list.length; i++) {
//     deleteBtn[i].addEventListener("click", deleteAfterClick);
// }

// function deleteAfterClick(){

// }



