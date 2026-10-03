const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.listen(port, () => {
    console.log(`Listening on part ${port}`);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let DiceValue = Math.floor(Math.random() * 6) + 1;
    res.render("RollDice.ejs", { num: DiceValue });
});

app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json");
    let { username } = req.params;
    let followers = ["Areen", "Aryan", "Sushil", "Suman", "Rahul", "Tiwari"];
    res.render("ig.ejs", { user: username , followers, data: instaData[username]});
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});
