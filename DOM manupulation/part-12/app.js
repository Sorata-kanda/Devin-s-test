
let jsonRes =
    '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes); // parse means changing the one data to another data type
console.log(validRes.fact);


let student = {
    name : "Rahul",
    age : 19,
    location : "Phagwara / Lovely Porfessional University",
}

let validJson = JSON.stringify(student);   // Convert js object into JSON
console.log(validJson);  


let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
const url3 = "https://icanhazdadjoke.com/";

// ---------------- Fetch by Promise --------------------

// fetch(url)
// .then((res) => {
//     // console.log(res);
//     return res.json()
// })
// .then((res) => {
//     console.log(`\nFact 1: ${res.fact}`);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((res) =>{
//     console.log(`\nFact 2: ${res.fact}`);
// })
// .catch((er)=> {
//     console.log("Error: ", er);
// })

// ---------------- Fetch by async/await --------------------

// async function fetcher(){
//     try{
//         let res = await fetch(url);

//         if(!res.ok){
//             throw new Error(`HTTP ERROR: ${res.status} ${res.statusText}`)
//         }
//         let result = await res.json();
//         console.log(`\nFact 1: ${result.fact}`);


//         let res2 = await fetch(url);
//         if (!res2.ok) {
//             throw new Error(`HTTP ERROR: ${res2.status} ${res2.statusText}`);
//         }
//         let result2 = await res2.json();
//         console.log(`\nFact 2: ${result2.fact}`);
//     }
//     catch(er){
//         console.log(`Error: ${er}`)
//     }
// }

// fetcher();



//------------ api calling using axios ------------------

let btn = document.querySelector("#bijli");
let para = document.querySelector("#fact");
btn.addEventListener("click", async function(){
    let newFact = await getFacts();
    console.log(newFact);
    para.innerText = newFact;
})

// const axios = require("axios");
async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
        
    } catch (error) {
        return (`error:- ${error}`);
    }
}

getFacts();

let btn2 = document.querySelector("#dogesh");
let dogImg = document.querySelector("#dogs")

btn2.addEventListener("click",async()=>{
    let dogpic = await dogies();
    dogImg.setAttribute("src", dogpic);
})

async function dogies() {
    try{
        let res = await axios.get(url2);
        console.log(res.data.message);
        return res.data.message;
    }catch(e){
        return e;
    }
    
}
dogies();



let btn3 = document.querySelector("#joke");
let joker = document.querySelector("#jokePara");

btn3.addEventListener("click", async function(){
    let jokers = await getJokes();
    joker.innerHTML = jokers;
})
let getJokes = async () => {
    try{
        const config = {headers: {Accept: "application/json"}}
        let res = await axios.get(url3,config);
        console.log(res);
        return res.data.joke;
    }
    catch(e){
        console.log(e);
    }

}



// --------------------------- Query Strings -----------------------------

const url4 = "http://universities.hipolabs.com/search?name=";
let inp = document.querySelector("input");
let btn4 = document.querySelector("#school");
let printer = document.querySelector("#result");
let list = document.querySelector("#list");
let country;

btn4.addEventListener("click", async function () {
    
    country = inp.value;
    console.log(country);
    let college = await getColleges(country);
    console.log(college);
    show(college);
    inp.value = "";
})

function show(college){
    list.innerText = "";
    for(col of college){
        console.log(col);
        let newwe = document.createElement("li");
        newwe.innerText = col.name;
        list.appendChild(newwe);
    }
}

let getColleges = async (country) => {
    try{    
        let res = await axios.get(url4+country);
        console.log(res);
        return res.data;
    }catch(e){
        console.log(e);
    }
}
getColleges();