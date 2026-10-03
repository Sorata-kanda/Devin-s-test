const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
    console.log(`App is listeing on port ${port}`);
});

// app.use((req,res) => {
//     // console.log(req);
//     console.log(`Request received on root`);
//     res.send("<h1>Welcome to the root page</h1>");
// })

app.get("/", (req, res) => {
    res.send("This is the Root page.");
});
app.get("/home", (req, res) => {
    res.send("<h1>This is the home page.</h1>");
});
app.get("/search", (req, res) => {
    let{q}=req.query;
    if(!q){
        res.send("Nothing searched!");
    }
    res.send(`Searched Results: ${q}`);

});
app.get("/:username", (req, res) => {
    let {username} = (req.params);
    res.send(`can i get a Hhhhhhhhhhhhhhhhhuuuuuuuuuuuuuuuuuuuu\nThis is the page of @${username}`);
});



app.get("*splat", (req, res) => {
    res.send(`<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Page Not Found</title>
                    <style>
                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }

                        body {
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                            background-color: #fafafa;
                            color: #111111;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-height: 100vh;
                            padding: 24px;
                        }

                        .error-container {
                            text-align: center;
                            max-width: 480px;
                        }

                        .error-code {
                            font-size: 72px;
                            font-weight: 500;
                            letter-spacing: -0.03em;
                            margin-bottom: 16px;
                            color: #111;
                        }

                        .error-title {
                            font-size: 24px;
                            font-weight: 500;
                            letter-spacing: -0.01em;
                            margin-bottom: 12px;
                        }

                        .error-description {
                            font-size: 15px;
                            line-height: 1.5;
                            color: #666666;
                            margin-bottom: 32px;
                        }

                        .home-button {
                            display: inline-block;
                            background-color: #111111;
                            color: #ffffff;
                            font-size: 14px;
                            font-weight: 500;
                            text-decoration: none;
                            padding: 12px 24px;
                            border-radius: 6px;
                            transition: background-color 0.2s ease;
                        }

                        .home-button:hover {
                            background-color: #333333;
                        }
                    </style>
                </head>
                <body>

                    <div class="error-container">
                        <div class="error-code">404</div>
                        <h1 class="error-title">Page not found</h1>
                        <p class="error-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                        <a href="/" class="home-button">Back to home</a>
                    </div>

                </body>
                </html>`);
    // res.send("FK u");
});
