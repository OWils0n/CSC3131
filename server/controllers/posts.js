import PostMessage from "../models/postMessage.js";
import express from 'express';
import mongoose from 'mongoose';

//The controllers define how we respond to requests being sent to the backend.
//After being directed to the right funcions by the routes, we create a response to send back

export const getPosts = async (req,res) => {
    try {

        const allPosts = await PostMessage.find(); //Post Message is our mongoose model which is connected to our database
        //here we return all the posts
        res.status(200).json(allPosts);
        
    } catch (error) {
        res.status(404).json({message: error.message});
        
    }
}

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()});
    //create a post following the PostMessage Schema so we can enter it into the database
    try {
        await newPost.save(); //Save to database
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }

}

export const updatePost = async (req, res) => {

    const { id: _id } = req.params;
    const postToUpdate = req.body; //we expect a post in the body of the request if we are routed to the update post 
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id`);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...postToUpdate , _id}, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {


    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Post Not Found`);
    console.log('DELETED POST');

    await PostMessage.findByIdAndRemove(id);


    res.json({ message: "Post deleted" });
}

export const likePost = async (req, res) => {
    
    const { id } = req.params;

    if (!req.userId) {
        return res.json({ message: "Not Logged In" });

    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Post Not Found`);
    
    const postToLike = await PostMessage.findById(id);

    const index = postToLike.likes.findIndex((id) => id === String(req.userId));
    //We look into the 'likes' attribute of the given post to see if we can find the users id in the array 

    if (index === -1) { //if the user is not in the likes array we add him 
        postToLike.likes.push(req.userId);
    } else { //if he has already liked it (his id is in the array) we remove his id from the array to unlike it 
        postToLike.likes = postToLike.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, postToLike, { new: true });
    
    res.json(updatedPost);
}