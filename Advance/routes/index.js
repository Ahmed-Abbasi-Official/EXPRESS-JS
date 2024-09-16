var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

                                              // ====================
                                              //   CRUD OPERATION
                                              // ====================



// ====================
//   Create
// ====================

router.get("/create", async (req, res) => {
  try {
    const createdUser = await userModel.create({
      userName: "Ahmed-Abbasi-Official",
      name: "Ahmed Abbasi",
      email: "aymi.coding@gmail.com",
      password: "Ahmed@12",
    });
    res.send(createdUser);
    console.log(createdUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("An error occurred while creating the user.");
  }
});




// ====================
//   READ
// ====================




router.get("/allUsers", async (req, res) => {
  try {
    // const allUsers=await userModel.find()
    const findUser = await userModel.findOne({ name: "Ahmed Abbasi" }); // return only one document having userName Ahmed Abbasi.
    if (findUser) {
      return res.send(findUser);
    } else {
      return res.send("No User");
    }
    // res.send(allUsers)  // Return an array which have all documents by find method
    // return only one document having userName Ahmed Abbasi.
  } catch (error) {
    console.log("Error in Find Users :", error);
    res.status(500).send("An Error occur in Find Users : ");
  }
});



// ====================
//   DELETE
// ====================



router.get("/delete",async(req,res)=>{
  try {
    const deleteUser=await userModel.findOneAndDelete({
      name:"Ahmed Abbasi",

    })
    res.send(deleteUser)
  } catch (error) {
    console.log("Error in Deleting Users :", error);
    res.status(500).send("Error in Deleting : ")

  }
})




                                          // ====================
                                          //   Session
                                          // ====================


// if server was restart session was automatically deleted .


// create Session

router.get('/session', async (req, res) => {
  try {
    req.session.theme = "Dark";
    res.send("Ban Gya");
  } catch (error) {
    res.status(500).send("Error in setting session");
    console.error("Error in setting session: ", error);
  }
});

// Check Session

router.get('/checkSession', async (req, res) => {
  try {
    if(req.session.theme === "Dark") { res.send(req.session.theme)}
    else{
       res.send("Light")
    }
  } catch (error) {
    res.status(500).send("Error in checking session");
    console.error("Error in checking session: ", error);
  }
});

// Delete Session

router.get('/deleteSession', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        console.log("Error in deleting Session : ", error);
        return res.status(500).send("Error in deleting session");
      }
      res.send("Ban Removed");
    });
  } catch (error) {
    res.status(500).send("Error in session handling");
    console.error("Error in session handling: ", error);
  }
});




                                          // ====================
                                          //   COOKIES
                                          // ====================



// CREATE

router.get('/cookie',(req,res)=>{
  try {
    res.cookie("name","Ahmed Abbasi");    // Cookie banty hy browser pr is li server pr req nhy kr sakty is li res use krty hy .
    res.send("Ban Gy")
  } catch (error) {
    res.status(500).send("Error in setting Cookie");
    console.error("Error in setting Cookie: ", error);
  }
})

// READ

router.get('/checkCookie',(req,res)=>{
  try {
    res.send(req.cookies.name);
    // Cookie server pr aty hy is li requst me find krty hy  .
    res.send("Check hu  gy")
  } catch (error) {
    res.status(500).send("Error in checking Cookie");
    console.error("Error in checking Cookie: ", error);
  }
})

// DELETE 

router.get('/deleteCookie',(req,res)=>{

  try {
    req.session.destroy((error) => {
      res.clearCookie("name")
      res.send("Clear hu gy")
    });
  } catch (error) {
    res.status(500).send("Error in Cookie handling");
    console.error("Error in Cookie handling: ", error);
  }
})



module.exports = router;
