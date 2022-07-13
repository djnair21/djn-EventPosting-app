import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: blueGrey,
    fontSize: '40px',
    
    fontFamily: [
      '"impact"',
    ].join(','),
  },
  image: {
    marginLeft: '15px',
    padding: '5px'
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
 
}));
