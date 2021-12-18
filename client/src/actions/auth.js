import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

//Actions are specific exports which can be dispatched using redux 
// Once dispatched the below functions run and make calls to the api to 
// talk to the backend and get data.
//The actions define how we use the api and what we do with the data

export const signin = (formData, history) => async (dispatch) => {
  //Because sending http requests takes time, this is an asynchronous action 
  try {
    const { data } = await api.signIn(formData); //uses the api functions to send and then receieve information from the backend
    //so for example here we are sending a post request (API.post('/user/signin', formData)) and waiting for data back 

    dispatch({ type: AUTH, data });

    history.push('/'); //Once signed in we send the user back to the home page

  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
};