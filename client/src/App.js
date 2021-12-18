import React from 'react';
import {Container} from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import useStyles from './styles';

//The top level of the front end. Decides what content we will show for each url route 

const App = () => {
    const classes = useStyles();

    return(

        <BrowserRouter>
            <Navbar />
            <Container className={classes.mainContainer} maxWidth="xl">
                
                <Switch>
                
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;