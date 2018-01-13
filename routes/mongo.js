var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/blog",function(err){
  if(err){
    throw err;
  }else{
    console.log("database is running...");
  }
})
var blogSchema = new mongoose.Schema({
  username:String,
  password:String,
  title:String,
  classify:String,
  author:String,
  summary:String,
  time:String,
  content:String
});
global.blogModel = mongoose.model("blogbase",blogSchema,"blogbase");
global.blogModel1 = mongoose.model("Ncontent",blogSchema,"Ncontent");
module.exports = mongoose;