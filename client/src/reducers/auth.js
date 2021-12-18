import {AUTH, LOGOUT} from '../constants/actionTypes';
//The reducers define how we will change the "state" which is globally accessible part of the redux 'Store'
// By changing the state we can send information anywhere in the program
const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
      case AUTH:
          localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

          return { ...state, authData: action?.data };
      case LOGOUT:
          console.log("CLEARING STORAGE");
          localStorage.clear();

          return { ...state, authData: null };
      default:
          return state;
    }
};

export default authReducer;