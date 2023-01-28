import Post from '../models/Post.js';

export const getPosts = async(req,res) => {
    try{
        const posts = await Post.find()
         res.send(posts);
    }
    catch(err){
        console.error(err);
        return res.status(500).json('error!');
    }  
}

export const postPosts = async(req,res) => {
    try{
        console.log(req.body);
        const {title,description} = req.body
        //create a new post
        const newPost = new Post({title, description})
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
