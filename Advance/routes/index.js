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



// create Session

router.get('/session',(req,res)=>{
  req.session.theme="Dark";
  res.send("Ban Gya")
})

// Check Session

router.get('/checkSession',(req,res)=>{
  
  res.send(req.session)
})



module.exports = router;
