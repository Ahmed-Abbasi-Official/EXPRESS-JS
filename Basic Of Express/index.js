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

// For Ahmed Route

app.get('/ahmed',(req,res)=>{
  res.render("Home",{name:"Ahmed Abbasi",
    buttonName:"See my Resume"
  })           // isky andar views folder ki os file ka nam likhna hy jisko rendar krwana hy or .ejs nhy lagana .
              // also send dynamicallyy data to ejs then ejs convert it into HTML .
  
})

// For Ahmed/Contact Route

app.get('/ahmed/contact',(req,res)=>{
  res.render("contact" ,{name:"Ahmed Abbasi"} )           

              // isky andar views folder ki os file ka nam likhna hy jisko rendar krwana hy or .ejs nhy lagana .
  
              // also send dynamicallyy data to ejs then ejs convert it into HTML .
  
})



                                      // =========================
                                      //     Static Files
                                      // =========================



app.get('/error',(req,res,next)=>{
  throw Error("Something went Wrong");
})

app.use(express.static('./public'))

// static file ko serve krna like  CSS and JS and IMAGES
// agar views k andar css ko alag file me dalna hy tu os ko idr daly gy.




                                      // =========================
                                      //     error handling
                                      // =========================



app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
  return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
  })



                                      // =========================
                                      //     Starting the Server
                                      // =========================

                                      
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
