import React from 'react';
import { makeStyles } from '@mui/styles';
import locLogo from './../../assets/map-pin.svg';
import { Typewriter } from 'react-simple-typewriter';

const useStyles = makeStyles(() => ({
  eduRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  eduContent: {
    width: '60%',
  },
  eduUl: {
    color: '#FF5C58',
    margin: '0px',
    padding: '0px',
  },
  eduLi: {
    margin: '2rem',
  },
  edutitle: {
    color: 'white',
    margin: '0px',
    padding: '0px',
  },
  eduLoc: {
    color: 'white',
  },
  eduLogo: {
    fontSize: '12px',
  },
  headerSideDiv: {
    position: 'absolute',
    top: '30%',
    left: '0px',
    color: 'white',
    width: '30px',
    display: 'flex',
    justifyContent: 'Center',
    alignItems: 'center',
    padding: '1.5rem',
    backgroundColor: 'black',
  },
  sectiontitile: {
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: '30px',
    color: 'white',
  },
}));

function Education() {
  const classes = useStyles();

  return (
    <div id="edu" className={classes.eduRoot}>
      <div className={classes.eduContent}>
        <ul className={classes.eduUl}>
          <li className={classes.eduLi}>
            <h2 className={classes.edutitle}>
              Bachelor of Technology (B.Tech), Computer Science & Engineering
            </h2>
            <p className={classes.eduLoc}>
              JMIT, Kurukshetra University (2019-2023){' '}
              <img className={classes.eduLogo} src={locLogo} alt="edu-logo" />
            </p>
          </li>
          <li className={classes.eduLi}>
            <h2 className={classes.edutitle}>
              Senior Secondary (XII), Science
            </h2>
            <p className={classes.eduLoc}>
              Shri Jyoti Parkash Senior Secondary School , Rohtak{' '}
              <img className={classes.eduLogo} src={locLogo} alt="edu-logo" />
            </p>
          </li>
        </ul>
      </div>
      <div className={classes.headerSideDiv}>
        <span className={classes.sectiontitile}>
          E<br />D<br />
          U<br />
          C<br />
          A<br />
          T<br />
          I<br />
          O<br />N
        </span>
      </div>
    </div>
  );
}

export default Education;
