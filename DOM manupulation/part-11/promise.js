// --------- Promises ---------------

// function saveToDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve(`sucess: ${data}`);
           

//         }else{
//             reject(`Failure: ${data}`);
            
//         }
//     });
// }

// let request = saveToDb("Rahul Jangra");   // req : promise object
// request.then(() =>{
//     console.log("Data 1 saved. Promise resolved");
//     return saveToDb("Shirou Neko");    
// }).then(() =>{
//     console.log("Data 2 saved.Promise resolved");
//     return saveToDb("Sorata kanda")
// }).then(() =>{
//     console.log("Data 3 saved.Promise resolved");
// })

// .catch((er)=>{
//     console.log("Promise NOT RESOLVED");
//     console.log(`Error: ${er}`)

// })




// ------------- Color code promise practive ----------------------

// let head =  document.querySelector("h1");

// function colorChanger(newColor,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             head.style.color = newColor;
//             resolve(`Color : ${newColor} is Successfully Assisgned`);
//         },delay);
        
//     })
    
// }

// let Col = colorChanger("red",1000)
// .then((success)=>{
//     console.log("Color Changed");
//     console.log(success);
//     return colorChanger("yellow",1000);
// }).then((success)=>{
//     console.log("New Color Assisgned");
//     console.log(success);
//     return colorChanger("blue",1000);
// }).then((success)=>{
//     console.log("New Color Changed");
//     console.log(success);
//     return colorChanger("hotpink",1000);
// }).then((success)=>{
//     console.log("New Color Tagged");
//     console.log(success);
// }).catch((er)=>{
//     console.log("Color Not Assigned")
//     console.log(`error :- \n ${er}`);
// });



