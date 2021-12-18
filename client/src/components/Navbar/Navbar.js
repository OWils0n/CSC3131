import { LOGOUT } from "../../constants/actionTypes";
import React, {useState , useEffect} from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import useStyles from './styles';
import logo from '../../images/logo.png';
import {useDispatch} from 'react-redux'; //so we can dispatch our actions 

const Navbar = () => {
    const classes = useStyles();
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    //We immediately try to get the user from the localstorage 
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    console.log(user);



    const logout = () => {
        //Dispatches a LOGOUT action for the reducers to handle
        dispatch({ type: LOGOUT });
    
        history.push('/');
    
        setUser(null);
    };

    useEffect(() => { //Use effect will apply the 'effect' whenever the dependancy list is changed
        //so in this example, we reset the user variable ever time the 'location' (which represents which page the user is on)
        //changes
    

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);



    return ( //The navbar at the top 


        <AppBar className={classes.appBar}>


            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Twooter</Typography>
                <img className={classes.image} alt='LOGO NOT FOUND ' src={logo} height="60"/>

            </div>

            <Toolbar className={classes.toolbar} >

                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} onClick={logout} color="secondary">Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
                

            </Toolbar>


           
        </AppBar>
    );

    
};
export default Navbar