//Etch-A-Sketch app for TOP

//Creat grid like layout on webpage
var gridLength = 16;
const container = document.querySelector('#container');

for (var i = 0; i < gridLength**2; i++){
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', i);
    newDiv.setAttribute('class', 'box');
    container.appendChild(newDiv);
    var oldGridLength = gridLength; 
}

//Listen for user input on changes to gridlength
function sendGridLength(){
    var gridLength = document.getElementById("gridLength").value;
    if (gridLength > 100){ return };
    var pixels = 800 / gridLength;
    document.getElementById("container").style.gridTemplateColumns = `repeat(${gridLength}, ${pixels}px)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${gridLength}, ${pixels}px)`;
    
    //Remove old divs
    for (var i = 0; i < oldGridLength**2; i++){
        var oldDiv = document.getElementById(i);
        oldDiv.remove();
    }

    //Adjust divs to new input
    for (var i = 0; i < gridLength**2; i++){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', i);
        newDiv.setAttribute('class', 'box');
        container.appendChild(newDiv);
        oldGridLength = gridLength; 
    }
} 

//Listen for hovering and change the color to black
container.addEventListener('mouseover', function(e){
    if (e.target.id == 'container'){
        return;
    }else{
        e.target.style.backgroundColor = "black";
    }
});

//Clear function
function clearBoard(){
   var all = document.getElementsByClassName("box");
   for (var i = 0; i <all.length; i++){
       all[i].style.backgroundColor = 'white';
   }
}
