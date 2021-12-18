import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import Input from './Input';
import { useHistory } from 'react-router-dom';
import {signin , signup} from '../../actions/auth';

//The Auth.js file is where we create the form for signing in and signing up


const authForm = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles(); //Import the styles from the styles.js file in the respective directory
    const history = useHistory();   
    const [showPassword, setShowPassword] = useState(false); 

    const [formData, setFormData] = useState(authForm);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch(); 

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault(); //Stops the browser from refreshing 

        if (isSignup) {
            dispatch(signup(formData, history)); //creates a signup actions using the parameters and the dispatches the action
            // for it to be dealt with in the backend and then the reducers

            console.log("DISPATCHING TO SIGNUP")
          } else {
            dispatch(signin(formData, history));
            console.log("DISPATCHING TO SIGNUP")
          }
    
        console.log(formData);

    };
    const handleChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value }); //sets the inputs attribute (specified with name) to the value the user enters 


    };
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    };


    return (

        //returns a nice looking html form created using @material-ui-core

        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <Grid container spacing={2}>
                        { 
                            isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }

                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>





                    <Grid container justifyContent='flex-end' >
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Have an account?' : "New to twooter? Sign Up" }
                            </Button>
                        </Grid>
                    </Grid>

                    


                </form>


            </Paper>
        </Container>
    )
}

export default Auth
