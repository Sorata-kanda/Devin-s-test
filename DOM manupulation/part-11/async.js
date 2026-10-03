// ------------------- Async/Await ----------------------



// async function greet(){
//     throw "error";
//     console.log("Kombanwa");
// }

// greet()
// .then(()=>{
//     console.log("Sucess 1");
//     return greet();
// }).then(()=>{
//     console.log("Sucess 2");
// }).catch((er) =>{
//     console.log("Not able to greet");
//     console.log(er);
// })


// Example 1 :-

// function rand(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let newNum = Math.floor(Math.random()*10)+1;
//             console.log(newNum);
//             resolve();
//         },1000);
//     });
// }

// async function demo() {
//     await rand();
//     await rand();
//     await rand();
// }
// demo();



// ------------- Color question by async/await and promise --------------------

let head = document.querySelector("h1");
function colorChanger(newColor, delay){
    return new Promise((resolve,reject)=>{
        let rand = Math.floor(Math.random()*10)+1;
        // console.log(rand);
        if(rand>8){
            reject(newColor);
        }else{
            setTimeout(() => {
            head.style.color = newColor;
            console.log(`Color changed to : ${newColor}`);
            resolve(); 
        }, delay);
        }
        
    })
}


// Some promises can be reject .. Soo how can we handle them with async/await ?? 
// let demo = async () => {
//     try {
//         await colorChanger("red",1000);
//         await colorChanger("green",1000);
//         await colorChanger("blue",1000);
//         await colorChanger("teal",1000);
//     } catch (error) {
//         console.log(`error caught: ${error}`);
//     }    
// }
// The upper way is a good method but we can also do this below one:- 

let demo = async () => {
    await colorChanger("red",1000).catch((er) => console.log(`Skipped ${er}. cause of rejection`));
    await colorChanger("green",1000).catch((er) => console.log(`Skipped ${er}. cause of rejection`));
    await colorChanger("blue",1000).catch((er) => console.log(`Skipped ${er}. cause of rejection`));
    await colorChanger("teal",1000).catch((er) => console.log(`Skipped ${er}. cause of rejection`));

    // console.log(`error caught: ${error}`);
}
demo();