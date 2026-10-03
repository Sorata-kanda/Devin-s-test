// let form = document.querySelector("form");
// let inp = document.querySelectorAll("input");
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("Form submitted");
//     for(let input of inp){
//         console.log(input.value);
//     }
// });




// ----------- Submission of whole form -------------------

// let form = document.querySelector("form");
// let i1 = document.querySelector("#i1");
// let i2 = document.querySelector("#i2")
// let i3 = document.querySelector("#i3")
// let btn = document.querySelector(".btn")

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log("form submitted")
//     console.log(`Name: ${i1.value}`);
//     console.log(`Password: ${i2.value}`);
//     console.log(`Email: ${i3.value}`);

// });



// --------- more events ----------
let form = document.querySelector("form");
let user = document.querySelector("#i1");
form.addEventListener("submit",function(eve){
    eve.preventDefault();
});
user.addEventListener("change", function(ev){
    ev.preventDefault();
    console.log(` change event: ${user.value}`)
});


user.addEventListener("input", function(ev){
    ev.preventDefault();
    console.log(` input event: ${user.value}`)
});