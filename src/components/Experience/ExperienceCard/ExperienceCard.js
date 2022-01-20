import React from 'react';
import { makeStyles } from '@mui/styles';
import locLogo from './../../../assets/map-pin.svg';

const useStyles = makeStyles(() => ({
  rootExpCard: {
    width: '280px',
    height: '370px',
    backgroundColor: 'black',
    borderRadius: '14px',
    margin: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  title: {
    color: '#FF2626',
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  cname: {
    color: 'white',
    fontSize: '23px',
  },
  timeDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    color: 'white',
    fontWeight: '500',
    fontSize: '14px',
  },
  descr: {
    width: '100%',
    margin: '0.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ul_descr: {
    margin: 0,
    padding: 0,
    fontSize: '14px',
    fontWeight: '300',
    color: 'white',
    marginLeft: '0.5rem',
  },
}));

function ExperienceCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.rootExpCard}>
      <h3 className={classes.title}>
        {props.title} <br /> @{' '}
        <span className={classes.cname}>{props.cname}</span>
      </h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <div className={classes.timeDiv}>
          <img
            style={{ width: '16x', height: '16px', margin: '0.2rem' }}
            src={locLogo}
            alt="loc-logo"
          />
          <h4 className={classes.location}>{props.loc}</h4>
        </div>
        <h4 className={classes.location}>{props.duration}</h4>
      </div>
      <div className={classes.descr}>
        <ul className={classes.ul_descr}>
          {props.descr.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
