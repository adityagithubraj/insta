const express=require("express");
const { register, allregisterUser, allfriends, login, sendFriendRequest, acceptRequest } = require("../controler/user");
const authentication = require("../middleware/authent");
const userrouter=express.Router()

userrouter.post('/register',register)
userrouter.post('/login',login)
userrouter.get('/users',allregisterUser)
userrouter.get('/users/:id/friends',allfriends)
userrouter.post('/users/:id/friends',authentication,sendFriendRequest)
userrouter.put('/users/:id/friends/friendid',acceptRequest)
userrouter.patch('/users/:id/friends/friendid',acceptRequest)


module.exports=userrouter;