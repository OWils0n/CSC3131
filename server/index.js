import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb" , extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));
app.use(cors());
app.use('/posts' , postRoutes);
app.use('/user' , userRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
//const CONNECTION_URL = 'mongodb+srv://Adminuser:adminpass@cluster0.fhbqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// The CONNECTION_URL is empty and will be populated by the .env file which is not saved to gitHub. This is to make sure our database connection 
// details are not visible in the code (Connection string commented for testing if the env variables arent working)


const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify' , false);s