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

// Create

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

// Find

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

module.exports = router;
