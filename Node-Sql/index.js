require("dotenv").config({ quiet: true });
const path = require("path");
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const mthovr = require("method-override");
const express = require("express");
const app = express();
const port = 3000;

app.use(mthovr("_method"));
app.set("views", path.join(__dirname,"/views"));
app.set("public", path.join(__dirname, "/public"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.json());                            // parses JSON bodies  { "key": "value" }
app.use(express.urlencoded({ extended: true }));    // parses HTML form submissions  key=value&key2=value2


let getRandomUser = () => {
    return [
        faker.number.int({ min: 1, max: 1000000 }),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

let getRandomId = () =>{
    return faker.number.int({ min: 1, max: 1000000 });
}

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

app.get("/home", (req, res) => {
    let q = "select count(*) from user";
    try {
        conn.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            
            res.render("home.ejs", { count: result[0]["count(*)"]});
        });
    } catch (err) {
        console.log(`Error caught: ${err}`);
        res.send("Some error in DB");
    }
});
app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/user", (req,res)=>{
    let q = "select id,username,email from user";
    try{
        conn.query(q, (err, result) => {
            if (err) throw err;
            res.render("user.ejs", {result}); 
        });
    }catch(err){
        console.log(err);
    }
    
})

// Add user


app.get("/user/add-user", (req,res)=>{
    let ranId = faker.number.int({ min: 1, max: 1000000 });
    res.render("create.ejs", {ranId});
})

app.post("/user/:newId", (req,res)=>{
    let {newId} = req.params;
    let {username,password, email} = req.body;
    console.log("printer");
    console.log(username == "");
    console.log(password == "");
    console.log(password === "" || username === "");
    if(username === "" || password === ""){
        res.send(
            "username and password can't be empty <br><br> ACCOUNT CREATION FAILED!",
        );
    }else{
        console.log(`${username}, ${password}, ${email}`);
        console.log(newId);
        let q = `Select * from user where username = '${username}'`;
        try{
            conn.query(q,(er,response)=> {
                if (er) throw er;
                console.log(response[0]);
                if(response[0] === undefined){
                    let q2 = `insert into user (id,username,password,email) values (${newId}, "${username}", "${password}", "${email}")`;
                    try{
                        conn.query(q2,(er,newRes)=>{
                            if (er) throw err;
                            console.log("Account creation SUCESSFULL");
                            // console.log(newRes);
                            res.redirect("/user");
                        })
                    }catch(er){
                        res.send("Failed");
                    }
                }else{
                    res.send("Username Exists <br><br> TRY LOGGING IN!");
                }
            })
        }catch(err){
            console.log("or occured");
            res.send("failed");
        }
        // res.send("wait we are rendering");
    }
    
})
//  Edit Route

app.get("/user/:id/edit", (req,res)=>{
    let {id} = req.params;
    let q = `select * from user where id = ${id}`;
    try{
        conn.query(q,(err,result)=>{
            if(err) throw err;
            result1 = result[0];
            res.render("edit.ejs",{result1});
        });
    }catch(err){
        console.log(err);
        res.send("We ran into some Error");
    }
    
});

// Delete Route

app.get("/user/:id", (req, res) => {
    let { id } = req.params;
    let [temp, user] = id.split(/ (.*)/s);
    id = temp;
    console.log(id);
    console.log(user);
    res.render("delete.ejs", {id,user});
});

app.delete("/user",(req,res)=>{
    console.log(req.body);
    let {id,user,passkey} = req.body;
    let q = `select password from user where id = ${id}`;
    try{
        conn.query(q, (err, response)=>{
            if(err) throw err;
            let result = response[0];
            console.log(result.password);
            if(result.password === passkey){
                console.log("deletion in progress");
                let q2 = `delete from user where id = ${id}`;
                try{
                    conn.query(q2,(err, res1)=>{
                        if (err) throw err;
                        console.log("Account deletion SUCCESS");
                        res.redirect("/user");
                    })
                }catch(er){
                    console.log(er);
                }
            }else{
                res.send("Failed! WRONG password entered");
            }
        })
    }catch(er){
        console.log(err);
    }
})

//  Update Route

app.patch("/user/:id",(req,res)=>{
    let {id} = req.params;
    let {username : newuset,password: newpass,email: newemail} = req.body;
    let q = `Select * from user where id = ${id}`;
    try{
        conn.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            // console.log(user);
            if(newpass != user.password){
                res.send("password inncorrect");
            }else{
                let q2 = `update user set username = '${newuset}' where id = ${id}`;
                let q3 = `update user set email = '${newemail}' where id = ${id}`;
                try{
                    conn.query(q2, (err, ress) => {
                        if(err) throw err;
                        if(newemail != user.email){
                            try{
                                conn.query(q3,(err, resss)=>{
                                    if(err) throw err;
                                    res.redirect("/user");
                                })
                            }catch(err){
                                console.log(`email error: ${err}`);
                            }
                        }else{
                            res.redirect("/user");
                        }
                        // res.redirect("/user");
                    });
                }catch(err){
                    console.log(err);
                }
                
            }
            
        });
    }catch(err){
        console.log(err);
    }
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});

// let q = "insert into user (id, username,email, password) values ?";
// let data = [];
// for (let i = 0; i < 100; i++) {
//     data.push(getRandomUser());
// }

// try {
//     conn.query(q, [data], (er, res) => {
//         if (er) throw er;
//         console.log(res);
//     });
// } catch (err) {
//     console.log(`Error was: ${err}`);
// }
// conn.end();
