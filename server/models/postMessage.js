import mongoose from 'mongoose';

//The models define how we will connect to the database and which collection we will save to 
// or read from. By defining a scheme we are telling mongoDb that we should save this type of data
// together in its own 'table'

const postSchema = mongoose.Schema({
    title: String,
    message: String, 
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;