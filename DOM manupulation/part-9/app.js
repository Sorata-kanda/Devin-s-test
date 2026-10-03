let imgChanger = document.getElementById("mainImg");
// console.dir(imgChanger);
// imgChanger.src = "./assets/creation_1.png";
// console.log(imgChanger);


let smallImg = document.getElementsByClassName("oldImg");

for(let i=0; i<smallImg.length; i++){
    smallImg[i].src = "./assets/spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
}

let tegs = document.getElementsByTagName("p");
console.dir(tegs[0].innerText = "This is a bad idea");

// selection by query selector

let s1 = document.querySelector("#description");
let s2 = document.querySelector(".box");
let s3 = document.querySelector("div a")
let s4 = document.querySelectorAll("div a")
console.dir(s1.innerText)
console.dir(s2.innerHTML)
console.dir(s3.innerText)
for(let i=0; i<s4.length; i++){
    console.log(s4[i].innerText);
}



// ------------------ Getter and setter attributes ----------------------------------


console.log(s2.getAttribute('id'));
s2.setAttribute('id','small-div');
console.log(s2.getAttribute('id'));



// ---------------- Styling ---------------

console.dir(imgChanger.style);
let hTake = document.querySelector('h1');
hTake.style.color = 'purple';
hTake.style.backgroundColor = 'rgb(225,255,255)';


for(let i=0; i<s4.length; i++){
    s4[i].style.color = 'yellow';
}



//------------ classlist -----------------------    This is an function! not a property

console.dir(s3.classList);
s3.classList.add('orange');
hTake.classList.add("orange"); 

// s3.classList.remove = "box-Link4";
// console.dir(s3.classList);

console.log(hTake.classList.contains("orange"));   // -> checks if the class exists or not (return T/F)

console.log(`Toggler: ${hTake.classList.toggle("orange")} `); // -> add or remove properties if they don't exists or exists


// ------------- parent and childs

let s5 = document.querySelector(".box");
console.log(s5.parentElement);
console.log(s5.childElementCount);
console.log(s5.children);

let s6 = document.querySelector("div ul")
console.log(s6.previousElementSibling)
console.log(s6.nextElementSibling)


// ---------- Creating & deleting elemetns-------------------

let newP = document.createElement("p");
newP.innerText = "This is a new paragraph!";
let body = document.querySelector("body");

s2.appendChild(newP)
// now if we want to append new data in newP that's possible

newP.append(" Some more new data that is appended");

let btn = document.createElement("button");
btn.style.cssText = "background-color: #0D6EFD; font-size: 15px; color: white; border: 1px solid grey; border-radius:10px; padding:10px; margin:10px;";
btn.innerText = "Click Me";

newP.prepend(btn);  // adds on start

s2.removeChild(newP);  // or we can just use {remove}
