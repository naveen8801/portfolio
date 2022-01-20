import React from 'react';
import { makeStyles } from '@mui/styles';
import gitLogo from './../../../assets/github.svg';

const useStyles = makeStyles(() => ({
  rootProjectCard: {
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
    position: 'relative',
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
    padding: '0.5rem',
    fontSize: '14px',
    fontWeight: '300',
    color: 'white',
    marginLeft: '0.5rem',
  },
  repoDetails: {
    marginBottom: '1.5rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row ',
    bottom: '0',
    position: 'absolute',
    left: '0',
    bottom: '0',
  },
  repoName: {
    margin: '0',
    color: 'white',
    fontSize: '15px',
  },
  aLink: {
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
      borderBottom: '1px solid #FF5C58',
    },
  },
}));

function ProjectCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.rootProjectCard}>
      <h3 className={classes.title}>
        {props.title} <br />
      </h3>
      <div className={classes.descr}>
        <ul className={classes.ul_descr}>
          {props.descr.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </div>
      <div className={classes.repoDetails}>
        <a className={classes.aLink} href={props.git} target="_blank">
          <img
            style={{ width: '23x', height: '23px', margin: '0.2rem' }}
            src={gitLogo}
            alt="git-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
