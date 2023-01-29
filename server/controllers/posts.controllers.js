import Post from '../models/Post.js';
import {uploadImage, deleteImage} from '../libs/Cloudinary.js';
import fs from 'fs-extra';

export const getPosts = async(req,res) => {
    try{
        const posts = await Post.find()
         res.send(posts);
    }
    catch(err){
        console.error(err);
        return res.status(500).json({message: error.message});
    }  
}

export const createPosts = async(req,res) => {
    try{
        console.log(req.body);
        const {title,description} = req.body
        let image;

        if(req.files.image){
            const result = await uploadImage(req.files.image.tempFilePath)
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
            // console.log(result);
            await fs.remove(req.files.image.tempFilePath);
        }

        //create a new post
        const newPost = new Post({title, description, image: image})
        //save the post
        await newPost.save();
    
        return res.json(newPost);
    }
    catch(err){
        console.error(err);
        return res.status(500).json('error!');
        
    }
}
export const updatePosts = async(req,res) => {
    try{
        console.log(req.params);
        console.log(req.body); 
        const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.send(updatePost)
    }
    catch(err){
        console.error(err);
        return res.status(500).json('error!');
    }
}
export const deletePosts = async(req,res) => {
    try{
        const postRemoved = await Post.findByIdAndDelete(req.params.id, req.body)
        if(!postRemoved) return res.sendStatus(404);

        if(postRemoved.image.public_id){
          await deleteImage(postRemoved.image.public_id); 
        }
        
        // fs.remove(postRemoved )

        return res.sendStatus(204);
    }
    catch(err){
        console.log(err);
        return res.status(500).json('error!');
    }
};

export const getPost =   async(req,res) => {
    try{
        await Post.findById(req.params.id)
        if(!post) return res.sendStatus(404);
        return res.json(post);
    }
    catch(err){
        console.log(err);
        return res.status(500).json('error!');
    }
    
};
