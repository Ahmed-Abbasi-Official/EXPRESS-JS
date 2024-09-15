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

module.exports = router;
