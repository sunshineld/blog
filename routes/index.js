var express = require('express');
var router = express.Router();
var con = require("./mongo");
//接收验证用户登录的请求
router.post("/checkuser.html",function(req,res){
  var username = req.body.username;
  var password = req.body.password;
  blogModel.find({"username":username,"password":password}).exec(function(err,data){
    if(data.length){
      res.cookie("username",username);
      res.send("1");
    }else{
      res.send("0");
    }
  })
});
//接收验证用户是否登录的请求
router.get("/checklogin.html",function(req,res){
  var username = req.cookies.username;
  if(username){
    res.send("1");
  }else{
    res.send("alert('请先登录！');location.href = '../dan/login.html'");
  }
});
//接收退出系统的请求
router.get("/checkout.html",function(req,res){
  res.clearCookie("username");
  res.send("<script>alert('退出成功！');location.href = 'dan/login.html'</script>")
});
//接收发布文章的请求
router.post("/publish_article.html",function(req,res){
  var title = req.body.title;
  var classify = req.body.classify;
  var author = req.body.author;
  var summary = req.body.summary;
  var content = req.body.content;
  var time = req.body.time;
  //console.log(title,classify,author,summary,content,time);
  var article = new blogModel1();
  article.title = title;
  article.classify = classify;
  article.author = author;
  article.summary = summary;
  article.content = content;
  article.time = time;
  article.save(function(err){
    if(err){
      res.send("0");
    }else{
      res.send("1");    
    }
  })
});
//接收显示新闻列表的请求
router.post("/show_list.html",function(req,res){
  var classify1 = req.body.classify1;
  var classify2 = req.body.classify2;
  blogModel1.find({"classify":{$nin:[classify1,classify2]}}).sort({'time':-1}).limit(8).exec(function(err,data){
    res.send(data);
  })
})
//接收获取新闻列表的请求
router.get("/getlist.html",function(req,res){
  var id = req.query.id;
  blogModel1.findById(id).exec(function(err,data){
    res.send(data);
  })
})
//接收保存新闻（文章）的请求
router.post("/save_article.html",function(req,res){
  var id = req.body.id;
  blogModel1.findById(id).exec(function(err,data){
    data.title = req.body.title;
    data.classify = req.body.classify;
    data.author = req.body.author;
    data.summary = req.body.summary;
    data.content = req.body.content;
    data.time = req.body.time;
    data.save(function(err){
      if(err){
        res.send("0");
      }else{
        res.send("1");    
      }
    })
  })
})
//接收删除新闻（文章）的请求
router.get("/delete_list.html",function(req,res){
  var id = req.query.id;
  blogModel1.findById(id).exec(function(err,data){
    if(err){
      res.send("0");
    }else{
      data.remove({});
      res.send("<script>alert('删除成功！');location.href = 'dan/list.html'</script>");
    }
  })
})
//接收显示详细内容的请求
router.get("/show_detail.html",function(req,res){
  var id  = req.query.id;
  blogModel1.findById(id).exec(function(err,data){
    if(err){
      throw err;
    }else{
      res.send(data);
    }
  })
})





module.exports = router;
