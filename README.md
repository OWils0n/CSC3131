

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Twooter WebApp provides a place for anyone to share whats on their mind. Log in or sign up to start twooting and interacting with 
others twoots. User data is saved securely on a cloud database and password data is hashed.

The webapp is split into Client and Server which can be run/deployed completely seperately in order to split up 
the load and seperate important data and functions for security. 

If you are in the client or server directory you can run 'npm install' followed by 'npm start' in order to start the client.

The connection to the atlas database is filled by environmental variables in .env for security. The connection 
will not be established if there is no .env . See .env.example

(For the purpose of testing / marking the connection string is commented in server/index.js however this string 
should still be formatted in a .env file if you want docker-compose to work)


Notable Packages: React, JWT, Redux, Axios, Bcrypt, Body-Parser, Cors, Express, Mongoose, Nodemon

Further information available in package.json


