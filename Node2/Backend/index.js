const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());
// GET - data comes from the URL as query params (?user=...&password=...)
app.get("/register", (req, res) => {
    console.log(req.query);
    res.send(`GET received — Username: ${req.query.user}`);
});

// POST - data comes from the request body (hidden, not in URL)
app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(`POST received — Username: ${req.body.user} <br> Password: ${req.body.password}`);
});

app.listen(port, () => {
    console.log(`Web is listening on port ${port}`);
});
