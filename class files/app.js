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

// let question = prompt("Eanter a range");
// let lucky_number = Math.floor(Math.random() * question) +1;
// console.log(lucky_number);
// if(question <= 40){
//     while (true) {
//         if (question != lucky_number) {
//             question = prompt("Try again the match is incorrect");
//         }
//         if (question === "quit") {
//             alert("You lose.\n Exiting the game.....");
//             break;
//         }if(question === lucky_number) {
//             alert("You won! ");
//             break;
//         }
//     }
// }else if(question >40){
//     let hint1 = Math.floor(lucky_number / 4); 

//     while (true) {
//         if (question != lucky_number) {
//             question = prompt(`Try again the match is incorrect. \n Your hint: ${hint1}`);

//         }
//         if (question === "quit") {
//             alert("You lose.\n Exiting the game.....");
//             break;
//         }if(question === lucky_number) {
//             alert("You won! ");
//             break;
//         }
//     }
// }

// alert(`Your luck number is: ${lucky_number}`);



//--------------------------------------- Funcitons ---------------------------------------------


function poem(){
    console.log("Preety little baby yeah yeah");
}
function avg_finder(a,b,c){
    let avgg = (a+b+c)/3;
    console.log(avgg);
}

function table(a){
    for(let i=1; i<=10;i++){
        console.log(`${a} x ${i} = ${a*i}`)
    }
}

poem();
avg_finder(10,20,30);
table(5);



//--------------------------------------- Return Funcitons ---------------------------------------------

function summer(a){
    let sum = 0;
    for(let i=0; i<a; i++){
        sum = sum+i;     
    }
    return sum;
}

function strSum(ary){
    let jointStr="";
    for(let i=0; i<ary.length; i++){
        jointStr += ary[i]+ " ";
        
    }
    
    return jointStr.trim();
}
let ary = ["Hi", "Hello", "Bye", "Fk u"];

console.log(summer(10));
console.log(strSum(ary));


//--------------------------------------- Methods ---------------------------------------------

const method1 = {
    addition : function(a,b){
        return (a+b);
    },sub : function(a,b){
        return (a-b);
    },mul : function(a,b){
        return (a*b);
    },
}

console.log(method1.sub(10,20));


//--------------------------------------- this keyword ---------------------------------------------

const stud2 = {
    name: "Rahul",
    Dream: "M8 gran coupe",
    age: 19,
    eng : 90,
    maths: 100,
    sci:100,
    finderr: function finder(a,b){
        console.log((this.eng + this.maths + this.sci)/3);
        console.log(`fucking ${a} and ${b}`);
    }

}

stud2.finderr(10,10);


//--------------------------------------- try/catch ---------------------------------------------


try{
    console.log(stud2.name +" wants "+ stud2.Dream);
    throw ("dream not affordable");
}catch(e){
    console.log(e);
}


//--------------------------------------- Arrow functions ---------------------------------------------

const arow1 = (a,b) => {
    console.log(a+b);
}
arow1(9,10);


// ------------------------------------ Implicit arrow function:- 

const arow2 =  (a,b) =>(
    a*b
);

console.log(arow2(10,20));



//--------------------------------------- Set Timeout ---------------------------------------------

// setTimeout(() => {console.log("Fukers")}, 1000);
// console.log("I hate :- \n");

// const ranAry = ["I hate", "Fukers", "You knew that", "didn't you?",".....", "YET", "You still fuked up", "You little bastard", "You will pay for this", "For sure", "!!"];
// for(let i=0;i<ranAry.length; i++){
//     setTimeout(() => {
//         console.log(ranAry[i],"\n");
//     },1500*(i+1));
// }




// const coustmerDetails = {
//     coust1 : { name: "Rahul", orderid: 2022, delivery: "ongoing"},
//     coust2 : { name: "bhavani", orderid: 2023, delivery: "About to be delivered"},
//     coust3 : { name: "Shivangi", orderid: 2024, delivery: "In Progegress"},
// }


// let counter = 1;
// for(key in coustmerDetails){
//     let cust = coustmerDetails[key];

//     setTimeout((CoustmerName, OrderID, DeliveryStatus) => {
//         console.log(`👤 Customer: ${CoustmerName}`);
//         console.log(`   Order #: ${OrderID}`);
//         console.log(`   Status: ${DeliveryStatus}`);
//         console.log(" ");
//     }, 3000 * (counter +1), cust.name, cust.orderid, cust.delivery);
//     counter ++;
// }



//--------------------------------------- Set Interval ---------------------------------------------

// let c = 1
// const timer = setInterval(() => {
//     console.log(c);
//     c++;
//     if (c>10){
//         clearInterval(timer);
//         console.log("out of timer");
//     }
// },1500);



//--------------------------------------- this for arrow function ---------------------------------------------

const fn = {
    name : "Tokisawa",
    getname : function(){
        console.log(this.name);  // obj is the parent! so this belong to obj name
    },

    getname2 : () =>{console.log(fn.name)},  // here it's the lexical scope, have the same scope as the [parent] that is (window)
}
fn.getname();
fn.getname2();



// ------------------------------------ For each loop :-    [SUS]

let ary2 = [1,2,3,4,5,6,6];
let printed = function(el){
    console.log(el);
}
ary2.forEach(printed);



// ------------------------------------ Map :- apply function on every element of array


let numm = [1,2,3,4,5,6,7];
let double = numm.map((el) => {
    return 2*el;
});

console.log(double);


let studentes = [
    {
        name: "Rahul",
        age: 19,
        marks: 95,
    },
    {
        name : "rt2",
        age: 20,
        marks: 92,
    },
    {
        name: "rt3",
        age : 21,
        marks: 97,
    }
]

let GPA = studentes.map((el) => {
    return el.marks/10;
})

console.log(GPA);


// ------------------------------------ filter :- [send's the new array]

let ans = numm.filter((el) =>{
    return el%2 == 0;
})

console.log(`All must be even and this a new arr : ${ans}\n meanwhile real array : ${numm}`);


// ------------------------------------ every :- sends true if all the elements of an arrya sends true

let checker = ans.every((el) => (el%2 == 0));
let checker2= numm.every((el) => (el%2 == 0));


console.log(checker);
console.log(checker2);

// --------------------------------- Reduce function: reduce the array into a single value ----------------------------------------

let acc = numm.reduce((res, el) =>{
    return res+el;
})



// Q -> find max in an array using reduce funciton

let QArr = [1,1,23, 2, 10, 5, 2, 100]

let maxi = QArr.reduce((res,el) =>{
    if (el>res){
        return el;
    }else{
        return res;
    }
})

console.log(maxi);

// Q -> check if every element in out array is a multiple of 10 or not

let checker12 = [10,20,30,40,50];
console.log(checker12.every((el) => el%10 == 0))

// Q ->     create the function to find the min number in an array

let brum = checker12.reduce((res,el) => {
    if(el<res){
        return el;
    }else{
        return res;
    }
} );
console.log(`The min ele shoud be: ${brum}`)


// -------------------------------------- Default parameter :- 

function sum(a,b=9){
    console.log(`The sum of a: ${a}, ${b} :- ${a+b}`);
}

sum(9);


// -------------------------------------- spread :- 
// we don't need to write the every value/ element of data structure

let arr = [2,3,4,4,5,1,6,7,8,9]
let test1 = Math.min(...arr);
console.log(test1);
// we can also copy it

let test2 = [...arr];
console.log(test2);

// or we can break a string in chars

let str2 = "Rahul Jangra";
let test3 = [...str2];
console.log(test3);

let str3 = "1234567890";
let t4 = [...str3];
t4 = t4.map((el) => Number(el));
console.log(t4);



// with object litreals

let data = {
    std1 : {name : "Rahul", email: "jangraboy.nature@gmail.com"},
    std2 : {name : "Rahul2", email: "rahuljan.codes@gmail.com"},
    std3 : {name : "Rahul3", email: "fboy61478@gmail.com"},
}
console.log(data);

let data2 = {...data, std4:{id:200}};
console.log("\nThis is data2:", data2);


// -------------------------------------- rest :- 

sum = function(...args){
    return args.reduce((accu,el) => accu+el);
}

console.log(`The sum function is not updated: ${sum(1,2,3)}`);


// ----------------------------------- Destructring :-

let strArr = ["Tony", "Michael", "Stark", "Tishar", "Rahul"];

let [winner, scdWinner, RunnerUp] = strArr;
console.log(`now these are new variables but the array is destructured: \n${winner} ${RunnerUp} ${scdWinner}`)


let {std1: name ,std2: {email}} = data;  // Difference between std1 and std2 is major
console.log(name);
console.log(email);