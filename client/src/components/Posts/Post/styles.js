import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '30%',
    backgroundBlendMode: 'darken',
    
    
  },
  border: {
    border: 'solid',
  
  },
  fullHeightCard: {
    height: '50%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderRadius: '30px',
    borderStyle: 'double',
    position: 'relative',
    color: 'white',
    height: '400px'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
    
  },
  grid: {
    display: 'flex',
    
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    color: 'white',
    
    
  },
  title: {
    padding: '0 16px',
    color: 'white',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
  },
  base: {
    borderStyle: 'double',
    backgroundColor: 'rgba(0,0,0, 0.8)'
  }
});