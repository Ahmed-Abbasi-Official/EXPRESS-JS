var express = require("express");
var router = express.Router();
const userModel = require("./users");



                                            // =================
                                            //  FLASH MESSAGES
                                            // =================



router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/failed", (req, res) => {
  req.flash("age", 12);
  req.flash("name", "Ahmed");
  res.send("bangya");
});

router.get("/check", (req, res) => {
  console.log(req.flash("age"), req.flash("name"));
  res.send("check");
});




                                              // =====================
                                              //  MONGOOSE QUESTION
                                              // =====================





                                              // ====================================================
                                              // Case In-Sensitive Search (1) --- use new regExp()  :
                                              // ====================================================





router.get("/createData", async (req, res) => {
  try {
    const data = await userModel.create({
      userName: "harshita",
      nickName: "Abbasi",
      name: "Hasnain Abbasi",
      discription: "Hi ! I am Ahmed Abbasi a Student Developer .",
      catogaries: [
        "HTML5",
        "CSS",
        "JS",
        "BootStrap",
        "Tailwind",
        "Firebase",
        "React",
      ],
    });
    res.send(data);
  } catch (error) {
    console.log("Error in Creating Data", error);
    res.status(500).send("Error");
  }
});

router.get("/findData", async (req, res) => {
  try {
    let find = new RegExp("Ahmed", "i"); // name batao  , insensitive
    let find1 = new RegExp("harsh", "i"); // name batao  , insensitive  (is my ye har os ko find kry ga jis me hars ata hu like harshi, harshita , hars)
    let find2 = new RegExp("^HarSh$", "i"); // ye code jis me (^ start yaha se hu ) (end $ is pe ) perfect search . ab beshak search me upperCase dalo .
    const allUser = await userModel.find({ userName: find2 });
    res.send(allUser);
  } catch (error) {
    console.log("Error in Finding : ", error);
    res.status(500).send("Finding Error ");
  }
});

module.exports = router;
