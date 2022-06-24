import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  flexDiv: {
    width: '100%',
    margin: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutUl: {
    margin: 0,
    padding: 0,
    width: '60%',
    textAlign: 'center',
    listStyle: 'none',
  },
  aboutli: {
    fontSize: '18px',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    color: 'white',
    lineHeight: '30px',
    letterSpacing: '0.4px',
  },
  bold: {
    fontWeight: '550',
    color: '#FF5C58',
  },
  link: {
    fontWeight: '550',
    color: '#A2D2FF',
    textDecoration: 'none',
  },
  headerSideDiv: {
    position: 'absolute',
    top: '35%',
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

function About() {
  const classes = useStyles();

  return (
    <div id="infoSection" className={classes.root}>
      <div className={classes.flexDiv}>
        <ul className={classes.aboutUl}>
          <li className={classes.aboutli}>
            Hi, My name is <span className={classes.bold}>Naveen kumar</span>.
          </li>
          <li className={classes.aboutli}>
            I am a self-learner, curious and enthusiastic in learning new
            things. Curiosity is what makes a person think different. I think
            learning even a small thing as it seem can make a difference.
          </li>
          <li className={classes.aboutli}>
            Take a look at some projects I built on{' '}
            <a className={classes.link} href="https://github.com/naveen8801">
              Github{' '}
            </a>
            or check my{' '}
            <a
              className={classes.link}
              href="https://drive.google.com/file/d/1gNxBUtaStCSCT5avVMszmB9gGBkDH_K4/view?usp=sharing"
            >
              Resume
            </a>{' '}
            here.
          </li>
          <br />
          <br />
          <li className={classes.aboutli}>
            Don't be shy,{' '}
            <a className={classes.link} href="mailto:naveensharma10d@gmail.com">
              Say hi!👋
            </a>{' '}
          </li>
        </ul>
      </div>
      <div className={classes.headerSideDiv}>
        <span className={classes.sectiontitile}>
          A<br />B<br />
          O<br />
          U<br />
          T<br />
        </span>
      </div>
    </div>
  );
}

export default About;
