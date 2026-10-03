// ------------ on click events ------------------

let btn = document.querySelector("button");
console.dir(btn);

// btn.onclick = function(){
//     console.log("button is clicked");
// }

// btn.onmouseenter = function(){
//     console.log("you entered a button");
// }



// ------------------------ Event listners ----------------------------------


// btn.addEventListener("click",sayHello);
// btn.addEventListener("mouseenter",Greet);
// btn.addEventListener("keydown",function(){
//     console.log("keypressed");
// })
// function sayHello(){
//     console.log("Hello there");
// }
// function Greet(){
//     console.log("Welcome to basics of js");
// }

//--------------------------------------------------------------

let blockk = document.querySelector(".innerDiv");
let head = document.querySelector("h1");
btn.addEventListener("click",function(){
    let v1,v2,v3;
    v1 = randomiser();
    v2 = randomiser();
    v3 = randomiser();
    blockk.style.backgroundColor = `rgb(${v1},${v2},${v3})`;
    head.innerText = blockk.style.backgroundColor; 
})


function randomiser(){
    let ran = Math.floor(Math.random()*255)+1;
    return ran;
}



//----------- keyevents-----------

let inp = document.querySelector(".inputTaker");

inp.addEventListener("keyup", function(ev){
    console.dir(ev.target.value)
})