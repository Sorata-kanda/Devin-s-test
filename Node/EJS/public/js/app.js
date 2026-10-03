let follow = document.querySelector(".follow");
let message = document.querySelector(".message");
let mainDiv = document.querySelector(".main");

follow.addEventListener("click",()=>{
    if(follow.innerText == "Follow"){
        follow.innerText = "Followed";
    }else{
        follow.innerText = "Follow";
    }
})

message.addEventListener("click", () => {
    if (message.innerText == "Message") {
        message.innerText = "Messaged";
        let para = document.createElement("p");
        para.innerText = `You messaged to the ${username}.`;
        setTimeout(() => {
            mainDiv.removeChild(para);
        }, 1000);
        mainDiv.appendChild(para);

    } else {
        message.innerText = "Message";
        let para = document.createElement("p");
        para.innerText = `You messaged to the ${username} has been removed.`;
        setTimeout(() => {
            mainDiv.removeChild(para);
        }, 1000);
        mainDiv.appendChild(para);
        

    }
});