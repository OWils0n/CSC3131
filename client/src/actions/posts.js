import * as api from '../api';
import { FETCH_ALL, CREATE , UPDATE , DELETE , LIKE } from '../constants/actionTypes';


//Actions are specific exports which can be dispatched using redux 
// Once dispatched the below functions run and make calls to the api to 
// talk to the backend and get data.
//The actions define how we use the api and what we do with the data

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({type: FETCH_ALL , payload: data});
        //dispatch is inderectly how we change the state. By dispatching an action, we effectively
        //trigger an event which the reducers are 'listening' for. When the reducer 'hears' an action
        //type is has a defintion for, it changes the state 


    } catch (error) {
        console.log(error.message);
    }

}

export const createPost = (post) => async (dispatch) => {
    try {

      console.log(post);
      const { data } = await api.createPost(post);
      dispatch({ type: CREATE, payload: data });

    } catch (error) {
      console.log(error.message);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: LIKE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
