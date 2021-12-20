import jwt , {decode} from "jsonwebtoken";

 
// With almost all the backend api functions we pass this auth middleware object
// It gets the json web token from the request and verifies the user 

const auth = async (req, res, next) => {
  try {

    const token = req.headers.authorization.split(" ")[1];


    let decodedData;

    if (token) {      
      decodedData = jwt.verify(token, 'secret');
      req.userId = decodedData?.id; //importantly we also populate the userId variable so it can be used in the controllers
      // for example if the user wants to like a post we must know their id to see if they have already liked it  
    } 

    next(); //if there is no error's then we let the controllers proceed
  } catch (error) {
    console.log(error);
  }
};

export default auth;