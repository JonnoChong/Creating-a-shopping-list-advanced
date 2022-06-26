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
    var li = document.createElement("li");
    // This var li has to go in the function, otherwise when we put new items in, it won't create a separate li for it
    li.appendChild(document.createTextNode(input.value));
    //createTextNode is what we are appending to the li. Input we get from the variable above, and if we want the value, we just do .value
    ul.appendChild(li);
    input.value="";
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






// SET UP FOR TOGGLING ON AND OFF LIST ITEMS
function toggle(){
    var list = document.getElementsByTagName("li");

    for (var i=0; i<list.length; i++) {
        list[i].addEventListener("click", crossListOff);
    }

    function crossListOff(){
        this.classList.toggle("done");
    }
}

toggle();
