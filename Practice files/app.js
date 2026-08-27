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