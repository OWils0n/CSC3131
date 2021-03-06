import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  mainContainer: {
    flexDirection: 'column-reverse',
    
    position: 'absolute',
    top: '15%'
  },
  
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));