

import React, {useState, useEffect} from "react";
import {Container , AppBar , Typography , Grow , Grid} from '@material-ui/core';
import Posts from "../Posts/Posts";
import Form from '../Form/Form';
import {getPosts} from '../../actions/posts';
import { useDispatch } from "react-redux";


const Home = () => { //The home is the container for the content of the home page 

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getPosts()); }, [currentId, dispatch])

    return (
    <Grow in>
        <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>

                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>

                </Grid>
        </Container>
            
    </Grow>
    )

}
export default Home;
