import React, {useState, useEffect} from 'react';
import { TextField , Button , Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost} from '../../actions/posts';

import {useSelector} from 'react-redux';



const Form = ({currentId,setCurrentId}) => { //The Form.js is for creating twoots 

    const [postData, setPostData] = useState({title: '', message: '', tags: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


    const handleSubmit = (e) => { 
        e.preventDefault();

        if (currentId === 0 ){//If currentId == 0 we are creating not editing
            dispatch(createPost({...postData , name: user?.result?.name})); //dispatch a create post action with all the current attributes however we change the 
            //name to the users login which we fetched above
        } else {
            dispatch(updatePost(currentId, {...postData , name: user?.result?.name}));
        }
        clear();
        
        
    }

    if (!user?.result?.name) {  //If we dont have a user in the storage then display this instead
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign In to twoot and like other's twoots.
            </Typography>
          </Paper>
        );
      }



    const clear = () => {
        setCurrentId(0);
        setPostData({title: '', message: '', tags: '', selectedFile: '' });
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Editing" : 'Twoot Something?'}</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value.split(',')})} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="black" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
    );
}

export default Form;