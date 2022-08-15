import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typewriter } from 'react-simple-typewriter';
import menue from './../../assets/menu.svg';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: '#0B0C10',
    zIndex: '100',
  },
  navTitle: {
    margin: '0px',
    color: '#FF5C58',
    fontWeight: '600',
  },
  navList: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLi: {
    marginLeft: '1.5rm',
    marginRight: '1.5rem',
    fontFamily: 'Montserrat',
    paddingBottom: '1px',
    fontWeight: '500',
    color: 'white',
    marginTop: '1rem',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px solid #FF5C58',
    },
    ['@media (max-width:800px)']: {
      display: 'none',
    },
  },

  menue: {
    display: 'none',
    paddingBottom: '1px',
    '&:hover': {
      cursor: 'pointer',
    },
    ['@media (max-width:800px)']: {
      display: 'block',
      marginTop: '1rem',
    },
  },

  mobileNavbar: {
    width: '100%',
    height: '80vh',
    backgroundColor: 'red',
    position: 'absolute',
    top: '4rem',
    backgroundColor: '#0B0C10',
  },

  mobileNavUl: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    textAlign: 'center',
    height: '35vh',
  },

  MobilenavLi: {
    marginLeft: '1.5rm',
    marginRight: '1.5rem',
    fontFamily: 'Montserrat',
    paddingBottom: '1px',
    fontWeight: '500',
    color: 'white',
    marginTop: '1.2rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  navLink: {
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const [isopen, setopen] = useState(false);
  return (
    <>
      <div className={classes.root}>
        <div style={{ marginLeft: '2rem' }}>
          <h1 className={classes.navTitle}>
            <Typewriter
              words={['naveen :)']}
              loop
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2500}
            />
          </h1>
        </div>
        <div style={{ marginRight: '2rem' }}>
          <ul className={classes.navList}>
            <a
              className={classes.navLink}
              href="https://drive.google.com/file/d/1IMR5mCOyZHHMqZ9QTTco66xm2sNRU33B/view?usp=sharing"
            >
              <li className={classes.navLi}>Resume</li>
            </a>
            <a className={classes.navLink} href="#infoSection">
              <li className={classes.navLi}>About</li>
            </a>
            <a className={classes.navLink} href="#edu">
              <li className={classes.navLi}>Education</li>
            </a>
            <a className={classes.navLink} href="#skills">
              <li className={classes.navLi}>Skills</li>
            </a>
            <a className={classes.navLink} href="#exp">
              <li className={classes.navLi}>Experience</li>
            </a>
            <a className={classes.navLink} href="#projects">
              <li className={classes.navLi}>Projects</li>
            </a>
            <li onClick={() => setopen(!isopen)} className={classes.menue}>
              <img src={menue} alt="menu-logo" />
            </li>
          </ul>
        </div>
      </div>
      {isopen ? (
        <div className={classes.mobileNavbar}>
          <ul className={classes.mobileNavUl}>
            <li className={classes.MobilenavLi}>Resume</li>
            <li className={classes.MobilenavLi}>About</li>
            <li className={classes.MobilenavLi}>Education</li>
            <li className={classes.MobilenavLi}>Skills</li>
            <li className={classes.MobilenavLi}>Experience</li>
            <li className={classes.MobilenavLi}>Projects</li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
