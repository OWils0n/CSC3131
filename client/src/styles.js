import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
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

    background: {
      color: 'rgba(0,0,0, 1)',
      backgroundColor: 'rgba(0,255,255,1)'
    },

    image: {
      marginLeft: '15px',
    },
  }));