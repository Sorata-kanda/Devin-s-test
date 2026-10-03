const figlet = require("figlet");

let name = process.version;
figlet(name, function(e, data){
    if(e){
        console.log("something went wrong ...")
        console.ir(e);
        return;
    }

    console.log(data);
});

