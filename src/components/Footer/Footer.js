import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  footerDiv: {
    width: '100%',
    height: '55px',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: '550',
    color: '#FF5C58',
  },
  text: {
    fontSize: '18px',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    color: 'white',
    lineHeight: '30px',
    letterSpacing: '0.4px',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footerDiv}>
      <p className={classes.text}>Made with ❤️ by <span className={classes.bold}>Naveen</span></p>
    </div>
  );
}

export default Footer;
