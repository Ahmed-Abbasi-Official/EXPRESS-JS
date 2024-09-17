var express = require('express');
var router = express.Router();


                              // =================
                              //  FLASH MESSAGES
                              // =================




router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/failed',(req,res)=>{
  req.flash('age',12)
  req.flash('name',"Ahmed")
  res.send('bangya')
})

router.get('/check',(req,res)=>{
  console.log(req.flash('age'),req.flash('name'));
  res.send('check')
  
})

module.exports = router;
