// Importing Express
const express = require("express");
const app = express();
const port = 4000;



                                // =========================
                                //        Middlewares
                                // =========================



// Global Middlewares

app.use((req, res, next) => {
  console.log("This is the first middleware!");
  next(); // If this is not called, the request won't proceed to the next route
});

app.use((req, res, next) => {
  console.log("This is the second middleware!");
  next(); // Allows the request to proceed to the next middleware or route
});



                                  // =========================
                                  //         Routes
                                  // =========================



// For Home Page Route

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

// For About Page Route

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

// For Contact Page Route

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});



                                      // =========================
                                      //     Route's Parameter
                                      // =========================



// For Profile Route with Route Parameter
app.get("/profile/:username", (req, res) => {
  // Route parameter example (dynamic)
  res.send(`<h1>Hello, ${req.params.username}</h1>`);
});



                                      // =========================
                                      //     Templates Engine
                                      // =========================



app.set("view engine","ejs")

app.get('/ahmed',(req,res)=>{
  res.render("Home")           // isky andar views folder ki os file ka nam likhna hy jisko rendar krwana hy or .ejs nhy lagana .
  
})

app.get('/ahmed/contact',(req,res)=>{
  res.render("contact")           // isky andar views folder ki os file ka nam likhna hy jisko rendar krwana hy or .ejs nhy lagana .
  
})


                                      // =========================
                                      //     Starting the Server
                                      // =========================

                                      
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
