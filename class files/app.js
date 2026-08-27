console.log("hello world");
let a = 10;
let b = 5;
console.log(a + b);
console.log(`The sum of a: ${a} and b: ${b} is: ${a + b}`); // This is known as template litreals!
let n1 = 5;
let n2 = "5";
console.log(n1 == n2);
console.log(n1 === n2);


let age = 18;

if(age>18){
    console.log("Yes, you can vote");
}else if(age === 18){
    console.log(`Congrats on being ${age}, you can vote now`);

}else{
    console.log("No you can't vote");
}

//practice question:-  take a string if it's first letter is a and it's lenght > 3 then it's a good string else it's not 

let str = "aomething";
if(str[0] === 'a' || str[0] === 'A'){
    if(str.length > 3){
        console.log(`our string: "${str}" is a good string`);
    }
}else{
    console.log(`our String: "${str}" is not a good string`);
}

// prompts and alerts
// alert("This is and alert message");
// console.error("Error message");
// console.warn("Warning message");

// let x = prompt("Type out your name: ");
// alert(`Welcome ${x}`);


let trem = " Feature to remove the spaces from start and end "
console.log(trem.trim());
console.log(trem.toUpperCase());
console.log(trem.toLowerCase());

let newstr = "ILoveCoding ";
console.log(newstr.indexOf("Love"));
console.log(newstr.indexOf("J")); // -1 when not found
console.log(newstr.indexOf("o"));

console.log(newstr.slice(5));
console.log(newstr.slice(0,5));
console.log(newstr.slice(-2)); // length of str :- 11-1 => 10 

console.log(newstr.replace("Love", "LOBELY"));
console.log(newstr.repeat(5));


let students = ["Rahul", "Ajay", "Rohan", "Hanshika"];
console.log(students[3]);
students[2] = NaN;
students.push("Nan");
students.unshift("Nan2"); // Add to front
students.pop();
students.shift();
console.log(students);
console.log(students.includes("Hanshika"));

let stud = ["Shirou" , "Kuro"];
let results = students.concat(stud);
console.log(results);
console.log(results.reverse());

console.log(results.reverse());
console.log(results.slice(3));
console.log(results.slice(3,4));
console.log(results.slice(-3));

console.log(results);
console.log(results.splice(2,1));  // starting count, delete count, then the element you wanna add
console.log(results.splice(0,0,"FUDU"));  

console.log(results);
console.log(results.sort()); // works only on string not on numbers

let nums = [ [1,2] , [2,3], [4,5]];
console.log(nums);


// for loops:-

for(let i =0; i<10; i++){
    console.log(i);
}

let num = 15;
for(let i=0; i<=num; i++){
    if(i%2!=0){
        console.log(i);
    }else{
        console.log("Even");
    }
}

for(let i=2; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}

for(let i=1; i<=10; i++){
    console.log(5*i);
}

let n = 4;
for(let i=0; i<=n; i++){
    for(let j=0; j<=i; j++){
        console.log(i);
    }   
}
    let fk = 0;


while(fk<10){
        console.log(fk);
        bo = false;
   
    fk++;
}

// let movie = "Singham";
// let guess = prompt("Enter the guessed movie");
// while(true){
//     if(guess != movie){
//         guess = prompt("Try again!");

//     }
//     if(guess == movie){
//         alert("Congrats the name is correct!!!");
//         break;    
//     }
// }




// ------------------------ loops with arrays ---------------------------------------

let fruits = ["apple", "lichy", "guava", "mango"];
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let heros = [["Avengers", "captin America", "iron man", "HULK"] , ["DC", "Superman", "Batman", "Speed", "Wonder women"]];

for(let i=0; i<heros.length; i++){
    console.log(`List #${i}`);
    for(let j=0; j<heros[i].length; j++){
        console.log(heros[i][j]);
    }
    console.log(" ");
}

// for of loop

for(fruit of fruits){
    console.log(fruit);
}



// -------------------------------- CODE FOR TODO ----------------------------------

// let todo = [];
// let  req = prompt();
// while(req != "quit"){
//     if(req === "add"){
//         let adder = prompt("Enter the task");
//         todo.push(adder);
//         console.log(adder);
//     }
//     else if(req === "delete"){
//         let deleter = prompt("Enter the word you want to delete");
//         let found = false;
//         for(let i=0; i<todo.length; i++){
//             if(todo[i] == deleter){
//                 todo.splice(i,1);
//                 console.log("Element found..\n Deleting....");
//                 found = true;
//                 break;
//             }
//         }
//         if(!found){
//             console.log("Element not found in the array");
//         }
//     }
//     else if(req === "list"){
//         console.log(todo);
//     }
   

//     req = prompt();
// }
// console.log("You are out of todo");


// -------------------------------- object litreals ----------------------------------

const  student = {
    name: "Rahul",
    age: "19",
    dream: "BMW M5 competition"
}

console.log(student.dream);


const studs = {
    aman: {
        grade: "A+",
        car: "Mercedes",
        potential: "increased from 100% to 120%",
    },

    Rahul: {
        grade: "C",
        car: "None",
        potential: "increased from 10% to 12%",
    }
};


const classInfo = [{name : "Anything", city : "Ramnivas", Grade : "Never given"},
     {name: "Partap rana", city : "kumbh ka mela", Grade : "Never less than A+"}, 
     {name: "Johumal kumbodo", city: "bhagirath", Grade: "Fked"}
    ]


let abss = -56.222;
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(abss))
console.log(Math.floor(5.55)); // -> lowest number
console.log(Math.ceil(6.78)); // -> largest number near points
console.log(Math.random());


// generate a random number between 1-100

let randomiser = Math.floor(Math.random() * 100) +1;
console.log(randomiser);

//generate a random number between 1-5

randomiser = Math.floor(Math.random() * 5) +1; 
console.log(randomiser);


//--------------------------------------- Guessing game ---------------------------------------------

let question = prompt("Eanter a range");
let lucky_number = Math.floor(Math.random() * question) +1;
console.log(lucky_number);
if(question <= 40){
    while (true) {
        if (question != lucky_number) {
            question = prompt("Try again the match is incorrect");
        }
        if (question === "quit") {
            alert("You lose.\n Exiting the game.....");
            break;
        }if(question === lucky_number) {
            alert("You won! ");
            break;
        }
    }
}else if(question >40){
    let hint1 = Math.floor(lucky_number / 4); 

    while (true) {
        if (question != lucky_number) {
            question = prompt(`Try again the match is incorrect. \n Your hint: ${hint1}`);

        }
        if (question === "quit") {
            alert("You lose.\n Exiting the game.....");
            break;
        }if(question === lucky_number) {
            alert("You won! ");
            break;
        }
    }
}

alert(`Your luck number is: ${lucky_number}`);