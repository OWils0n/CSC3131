import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),

    },
    backgroundColor: 'rgba(128,128,128,0.9)',
    padding: '20px',
    
    borderRadius: 15

  },
  paper: {
    position: 'relative',
    top: '5%',
    left: '15%',
    width: '130%',
    
    padding: theme.spacing(2),
    backgroundColor: 'rgba(128,128,128,0.9)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));