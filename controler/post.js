
    const { Post } = require("../model/post.modul")

    //find allpost 
    exports.allpost=async (req,res)=>{
        try{
          const post=await Post.find();
          return res.status(200).send(post)
        }
        catch(err){
            return res.status(400).send({"msg":err.message})
        }
    }
    
    //create post
    exports.createPosts=async (req,res)=>{
    try{
           const {text,image}=req.body;
           if(text==undefined || image==undefined){return res.status(400).send({"Msg":"enter all thinhs"})}
           const id=req.user;
         const post =await Post.insertMany([{user:id,text,image}])
         return res.status(201).send({"msg":" created a post "})
        }
        catch(err){
            return res.status(400).send({"msg":err.message})
        }
    }
    
    //update post
    exports.updatePosts=async (req,res)=>{
        try{
               const {text,image}=req.body;
               const id=req.user;
              const postId=req.params.id
             const post =await Post.findOne({_id:postId,user:id})
             if(!post){
                return res.status(400).send({"msg":"id is wrong"})
             }
             if(text!=undefined){
             post.text=text;
               await post.save()
             }
             if(image!=undefined){
                post.image=image;
                await post.save()
             }
             return res.status(204).send({"msg":"updated a post"})
            }
            catch(err){
                return res.status(400).send({"msg":err.message})
            }
        }
    

        //deletePost
     exports.deletePosts=async (req,res)=>{
        try{ 
            const postid=req.params.id;
            const id=req.user
            const post =await Post.findOne({_id:postid,user:id})
            if(!post){
                return res.status(400).send({"msg":"You cannot delete other post"})
            }
            await Post.findByIdAndDelete(postid)
            return res.status(202).send({"Msg":"post deleted successfully"})
    
    
        }
        catch(err){
            return res.status(400).send({"msg":err.message})
        }
    
     }   
    
    //likepost
     exports.likeposts=async (req,res)=>{
        
        try{
        const id=req.user;
        const postid=req.params.id;
        const post=await Post.findById(postid);
         if(!post){
            return res.status(400).send({"msg":"Post  not  found "})
         }
         if(post.likes.includes(id)){
            return res.status(401).send({"msg":"already liked this post"})
         }else{
            post.likes.push(id)
            await post.save()
            return res.status(201).send({"msg":"liked  post successully"})
         }
    
        }
        catch(err){
            return res.status(400).send({"msg":err.message})
        }
     }
    
     //comment on post 
     exports.commentposts=async (req,res)=>{
        try{
            const {text}=req.body;
            const id=req.user;
            const postid=req.params.id;
            const post=await Post.findById(postid);
            let comment ={
                user:id,
                text
            }
            post.comments.push(comment);
            await post.save();
            return res.status(201).send({"msg":"added a comment"})
        }
        catch(err){
            return res.status(400).send({"msg":err.message})
        }
     }
    
     // delail of post with id
     exports.detailofPosts=async (req,res)=>{
        try{
            const id=req.params.id;
            const post=await Post.findById(id);
            return res.status(200).send(post)
        }
        catch(err){
            return res.status(400).send({"msg":err.message})
        }
     }