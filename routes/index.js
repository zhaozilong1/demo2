var express = require('express');
var router = express.Router();
var fs = require("fs");

var n=0



/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile("public/zzl.txt","utf-8",function(err,data){
    res.render('index', { bcd:data + n + "次" });
    n++
  })

});
module.exports = router;
