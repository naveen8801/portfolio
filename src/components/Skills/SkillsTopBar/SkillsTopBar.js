import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  skillsTopBarRoot: {
    height: '45px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  skillsUl: {
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
  },
  skillsLi: {
    margin: '0.5rem',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: 'white',
    height: '45px',
    width: '120px',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '10px',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  skillsLiActive: {
    margin: '0.5rem',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    color: 'white',
    height: '45px',
    width: '100px',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF2626',
    borderRadius: '10px',
  },
}));

function SkillsTopBar({ activeIndex }) {
  const classes = useStyles();
  const [active, setactive] = useState(0);
  const SetactiveIndex = (idx) => {
    setactive(idx);
    activeIndex(idx);
  };
  return (
    <div className={classes.skillsTopBarRoot}>
      <ul className={classes.skillsUl}>
        <li
          onClick={() => SetactiveIndex(0)}
          className={active === 0 ? classes.skillsLiActive : classes.skillsLi}
        >
          All
        </li>
        <li
          onClick={() => SetactiveIndex(1)}
          className={active === 1 ? classes.skillsLiActive : classes.skillsLi}
        >
          Languages
        </li>
        <li
          onClick={() => SetactiveIndex(2)}
          className={active === 2 ? classes.skillsLiActive : classes.skillsLi}
        >
          Frameworks
        </li>
        <li
          onClick={() => SetactiveIndex(3)}
          className={active === 3 ? classes.skillsLiActive : classes.skillsLi}
        >
          Tools
        </li>
      </ul>
    </div>
  );
}

export default SkillsTopBar;
