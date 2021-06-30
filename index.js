//You find info about addEvenetListener() fun documentation
//There different event
//Syntax: document.addEventListener(event, function)
        //where parameter event is string specifies name of event
        //and function to run passed fun when event occured



//For e.g
/*
//This will gives alert after clicking on button
document.querySelector(".w").addEventListener("click", handClick);
function handClick()
{
    alert("I got clicked");
}

//Another syntax
document.querySelector(".w").addEventListener("click", function (){
    alert("I got clicked");
});

*/


//Adding event listener to all of the buttons
/*
var buttons= document.querySelectorAll("button");
for(var i=0; i<buttons.length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() {
       alert("I got clicked");
      });
}
*/



//Adding sounds to all buttons after mouse-click
/*
var buttons= document.querySelectorAll("button");
for(var i=0; i<buttons.length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() {
       //alert("clicked");
       console.log(this);
       var audio = new Audio('sounds/tom-1.mp3');
       audio.play();
      });
}
*/

/*
//key pressed event
document.addEventListener("keydown", function(event){
    alert(event.key); //gives which key is pressed
});
*/



//Adding sounds to buttons after clicking specific button
//Note: We can figure out the identity of the button that triggered the event by "this"
      //"this" is identity of the button that triggeredevent listener
      //if we run-> console.log(this);    within above event listener function
              // --> it will give output "<button class="w drum">w</button>" on console after clicking on 'w' button.


var buttons= document.querySelectorAll("button");
for(var i=0; i<buttons.length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function() {
       //alert("clicked");
       //console.log(this);
       var buttonHTML = this.innerHTML;
       makeSound(buttonHTML);
      });
}


document.addEventListener("keydown", function(event){
   // alert(event.key);
   var keyPressed=event.key;
   makeSound(keyPressed);
});


function makeSound(e)
{
    switch (e) {
        case "w":
         var audio = new Audio('sounds/tom-1.mp3');
         audio.play();
            break;
         
         case "a":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
             break;

         case "s":
             var audio = new Audio('sounds/tom-3.mp3');
             audio.play();
                break;
             
         case "d":
             var audio = new Audio('sounds/tom-4.mp3');
             audio.play();
                break;

         case "j":
             var audio = new Audio('sounds/crash.mp3');
             audio.play();
                break;

         case "k":
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();
                break;

         case "l":
             var audio = new Audio('sounds/snare.mp3');
             audio.play();
                break;

    
        default:
            break;
    }
}