import {Router} from 'express';
import {getPosts, 
        postPosts, 
        updatePosts,
        deletePosts,
        getPost} from '../controllers/posts.controllers.js';


const router = Router()

router.get('/posts', getPosts) 
router.post('/posts', postPosts );
router.put('/posts', updatePosts);
router.delete('/posts', deletePosts);
router.get('/posts/:id', getPost)


export default router;