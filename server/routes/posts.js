import express from 'express';

import { getPosts, createPost, updatePost , deletePost, likePost} from '../controllers/posts.js';

import auth from '../middleware/auth.js';

const router = express.Router();
//These routes are how we handle and direct the http request by looking at the
// type of request and path and send to the controllers respectively 

router.get('/', getPosts);

router.post('/' , auth , createPost);

router.patch('/:id' , auth , updatePost )

router.delete('/:id' , auth , deletePost );

router.patch('/:id/likePost', auth , likePost);


export default router;