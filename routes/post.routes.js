const express=require("express");
const { allpost, createPosts, updatePosts, likeposts, deletePosts, commentposts, detailofPosts } = require("../controler/post");
const authentication = require("../middleware/authent");
const postrouter=express.Router()

postrouter.get('/posts',allpost)
postrouter.get('/posts/:id',detailofPosts)
postrouter.post('/posts',authentication,createPosts)
postrouter.put('/posts/:id',authentication,updatePosts)
postrouter.delete('/posts/:id',authentication,deletePosts)
postrouter.post('/posts/:id/like',authentication,likeposts)
postrouter.post('/posts/:id/comment',authentication,commentposts)



module.exports=postrouter;