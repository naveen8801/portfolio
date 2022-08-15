import React from 'react';
import { makeStyles } from '@mui/styles';
import ProfilePic from './../../assets/IMG_20200513_131326.jpg';
import { Typewriter } from 'react-simple-typewriter';
import gmail from './../../assets/mail.svg';
import insta from './../../assets/instagram.svg';
import github from './../../assets/github.svg';
import twitter from './../../assets/twitter.svg';
import my from './../../assets/IMG_20220507_164745 - Copy.jpg';

const useStyles = makeStyles(() => ({
  InfoDiv: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgWrapper: {
    width: '270px',
    height: '270px',
    borderRadius: '100%',
    overflow: 'hidden',
  },

  Infoimg: {
    width: '100%',
    height: '100%',
  },

  infoNameHead: {
    fontSize: '40px',
    color: 'white',
    fontFamily: 'Roboto',
  },

  infoBio: {
    margin: '0px',
    fontSize: '25px',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#FF5C58',
  },
  InfoSocial: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogo: {
    margin: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

function InfoSection() {
  const classes = useStyles();

  return (
    <div className={classes.InfoDiv}>
      <div className={classes.imgWrapper}>
        <img src={my} className={classes.Infoimg} alt="info-img" />
      </div>
      <div className={classes.InfoTitle}>
        <h1 className={classes.infoNameHead}>Naveen Kumar</h1>
      </div>
      <div className={classes.InfoBio}>
        <h3 className={classes.infoBio}>
          "{' '}
          <span className={classes.TypingBio}>
            <Typewriter
              words={[
                'MERN Stack',
                'Natural Language Processing',
                'Open Source',
              ]}
              loop
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={2500}
            />
          </span>{' '}
          "
        </h3>
      </div>
      <div className={classes.InfoSocial}>
        <a className={classes.link} href="mailto:naveensharma10d@gmail.com">
          <img className={classes.socialLogo} src={gmail} alt="social-logo" />
        </a>
        <a className={classes.link} href="https://github.com/naveen8801">
          <img className={classes.socialLogo} src={github} alt="social-logo" />
        </a>
        {/* <a className={classes.link} href="mailto:naveensharma10d@gmail.com">
          <img className={classes.socialLogo} src={twitter} alt="social-logo" />
        </a> */}
      </div>
    </div>
  );
}

export default InfoSection;
