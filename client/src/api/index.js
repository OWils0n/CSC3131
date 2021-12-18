import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


API.interceptors.request.use((req) => {

    if (localStorage.getItem('profile')) { //if we have a token
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
        //                                    Search the local storage to try find a log in profile then get the token
        //Then attaches it to the header of the http request so that we can use it in authorisation in the backend 
    }
  
    return req;
});

// Here we send an actual http request to the backend. The data in the request and how we will deal with the response 
// is handled in actions
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts',newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);