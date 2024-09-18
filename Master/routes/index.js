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
      userName: "nani",
      nickName: "Abbasi",
      name: "Hasnain Abbasi",
      discription: "Hi ! I am Ahmed Abbasi a Student Developer .",
      catogaries: [
        "HTML5",
        "fashion",
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



                                              // ====================================================
                                              // how i find the documents where an array fields such 
                                              // values that i search .
                                              // ====================================================




router.get('/findDoc',async(req,res)=>{
  let find = new RegExp('^cSs$','i')
  const allDoc=await userModel.find({catogaries:{$all:[find,'HTML5']}})
  res.send(allDoc)
})




                                              // ====================================================
                                              // how can i search for documents with a specific date 
                                              // date range in mongoose ?
                                              // ====================================================



router.get('/findDateRange',async(req,res)=>{
  let date1 = new Date('2024-09-01');
  let date2 = new Date('2024-10-18');

  let userFind=await userModel.find({
    dateCreated:{$gte : date1 , $lte:date2} // gte (greater than equal) and lte (less than equal).
  })
  res.send(userFind)
})




                                              // ====================================================
                                              // how can i filter documents based on the existence of
                                              // a field in Mongoose ?
                                              // ====================================================




router.get('/filter',async(req,res)=>{
  let find = await userModel.find({catogaries:{$exists:true}})
  res.send(find)
})




                                              // ====================================================
                                              // how can i filter documents based on a specific field's
                                              // length in Mongoose ?
                                              // ====================================================



router.get('/filterField',async(req,res)=>{
  let findUser=await userModel.find({
    $expr:{
      $and:[
        { $gte:[{$strLenCP:'$nickName'},0]},
        {$lte:[{$strLenCP:'$nickName'},12]}
      ]
    }
  })
  res.send(findUser);
})

module.exports = router;
