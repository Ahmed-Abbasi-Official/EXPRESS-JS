



// Routing




const express = require("express");
const app = express();
const port = 4000;

// For Home Page Route .

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

// For About Page Route .

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

// For Contact Page Route .

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});




// Middlewares




// For Home Page Route .

app.use((req, res, next) => {
  console.log("me Middleware hu !!");
  next(); // ye agar na hu tu ye req agly route pr nhy ja pae ga
});
app.use((req, res, next) => {
  console.log("me 2nd Middleware hu !!");
  next(); // ye agar na hu tu ye req agly route pr nhy ja pae ga
});

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

// For About Page Route .

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

// For Contact Page Route .

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});





//  Route Parameter




app.get("/profile/:username", (req, res) => {
  res.send(`<h1>hello ${req.params.username}</h1>`);
});
