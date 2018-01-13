var express = require('express');
var router = express.Router();
var con = require("./mongo");
// 接收显示随笔内容的请求
router.get('/showlife.html', function(req, res) {
  var classify =req.query.classify;
  blogModel1.find({"classify":classify}).exec(function(err,data){
    res.send(data);
  })
});
// 接收显示碎言碎语内容的请求
router.get('/showWord.html',function(req,res){
  var classify = req.query.classify;
  blogModel1.find({"classify":classify}).sort({"time":-1}).exec(function(err,data){
    res.send(data);
  })
})
// 接收显示知识分享页分类的请求
router.get('/showClassify.html',function(req,res){
  var classify = req.query.classify;
  blogModel1.find({"classify":classify}).exec(function(err,data){
    res.send(data);
  })
})
//显示最新文章的请求
router.get('/show_newlist.html',function(req,res){
  var word = req.query.classify;
  blogModel1.find({"classify":{$ne:word}}).sort({"time":-1}).limit(5).exec(function(err,data){
    res.send(data);
  })
})
module.exports = router;
