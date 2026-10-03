// ------------------ Processes -----------------------

// let n = 5
// for(let i=0; i<=5; i++){
//     console.log(n);
//     n++;
// }

// console.log(process.argv)


// ------------------ Processes -----------------------

// const maths = require("./math");
// const fruits = require("./tempo")
// console.log(maths);
// console.log(maths.g);

// console.log(fruits[2].name);


import {obj} from "./math.js";
console.log(obj.sum(1,2));

import { generate,count } from "random-words";
console.log(generate());