// Write a program to delete all the occurance given of element num in the given array

let arr = [1,2,2,2,2,2,2,3,2,4,2,5,6,7,8,9];
let num = 2;
count = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        count++;
    }

    if(count>1){
        i++;
        count--;
    }
    console.log(`${arr[i]} index : ${i}`);
    
}


// Write an arrow function that returns the  square for a number n

let sq = (n) => {
    console.log(n*n);
}

sq(4);


// Write a fn that print "Hello world" 5 times at interval of 2 sec
let counter = 1;
let id = setInterval(() => {
    if(counter>=5){
        clearInterval(id);
    }
    console.log("Hello world");
    counter++;
    
},1000);