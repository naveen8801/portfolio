import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  skillsCardRoot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    margin: '1.5rem',
    width: '110px',
    borderRadius: '7px',
    border: '1px solid #B5EAEA',
  },
  skillsimg: {
    width: '32px',
    height: '32px',
    margin: '0.2rem',
  },
  skillscardname: {
    margin: '0px',
    padding: '0px',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px',
  },
}));

function SkillsCard({ name, img }) {
  const classes = useStyles();

  return (
    <div className={classes.skillsCardRoot}>
      <img className={classes.skillsimg} src={img} alt="skills-logo" />
      <h3 className={classes.skillscardname}>{name}</h3>
    </div>
  );
}

export default SkillsCard;
