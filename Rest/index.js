const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
const {v4 :uuidv4} = require("uuid");
const mth_ovr = require("method-override");

app.use(mth_ovr("_method"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        user: "Rahul Jangra",
        content:
            "In order to achieve success i must burn myself.<br>THAT'S THE REASON I AM STILL LOSING.",
    },
    {
        id: uuidv4(),
        user: "Sorata",
        content:
            "Be a Good guy. Cause everyone is nice from a different perspective.",
    },
    {
        id: uuidv4(),
        user: "Shirou Neko",
        content: "In order to be me. You have to beleive Me(THAT'S YOU).",
    },
];

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new", (req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {Username, Content} = req.body;
    let userid = uuidv4(); 
    posts.push({ id:`${userid}`, user: Username, content: Content});
    for(post of posts){
        console.log(post);
    }
    res.redirect("/posts");
})
app.get("/posts/:uniqueid",(req,res)=>{
    let {uniqueid} = req.params;
    let poster = posts.find((p) => uniqueid === p.id)
    if(!poster){
        res.render("error.ejs");
    }else{
        res.render("show.ejs", { poster });
    }
})

app.patch("/posts/:uniqueid", (req,res)=>{
    let {uniqueid} = req.params;
    let newContent = req.body.Content;
    let poster = posts.find((p) => uniqueid === p.id);
    poster.content = newContent;
    // console.log(poster);
    res.redirect("/posts");
})

app.get("/posts/:uniqueid/edit", (req,res)=>{
    let { uniqueid } = req.params;
    let poster = posts.find((p) => uniqueid === p.id);
    res.render("edit.ejs", {poster});
})

app.delete("/posts/:uniId",(req,res)=>{
    let {uniId} = req.params;
    posts = posts.filter((p) => uniId !== p.id);
    res.redirect("/posts");
})
app.listen(port, () => {
    console.log(`Listening.... to port: ${port}`);
});
