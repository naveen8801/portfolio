import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import SkillsTopBar from './SkillsTopBar/SkillsTopBar';
import c from './../../assets/skills-logo/icons8-c++.svg';
import js from './../../assets/skills-logo/icons8-javascript.svg';
import java from './../../assets/skills-logo/icons8-java.svg';
import py from './../../assets/skills-logo/icons8-python.svg';
import react from './../../assets/skills-logo/react-js.svg';
import node from './../../assets/skills-logo/icons8-nodejs.svg';
import express from './../../assets/skills-logo/expressjs-icon.svg';
import mongo from './../../assets/skills-logo/mongodb-icon.svg';
import tensor from './../../assets/skills-logo/tensorflow-icon.svg';
import keras from './../../assets/skills-logo/Keras_logo.svg';
import azure from './../../assets/skills-logo/heroku-icon.svg';
import heroku from './../../assets/skills-logo/microsoft_azure-icon.svg';
import flask from './../../assets/skills-logo/pocoo_flask-icon.svg';
import SkillsCard from './SkillsCard/SkillsCard';

const SkillsData = [
  {
    name: 'C++',
    type: 'lang',
    img: c,
  },
  {
    name: 'JavaScript',
    type: 'lang',
    img: js,
  },
  {
    name: 'Java',
    type: 'lang',
    img: java,
  },
  {
    name: 'Python',
    type: 'lang',
    img: py,
  },
  {
    name: 'ReactJs',
    type: 'frameW',
    img: react,
  },
  {
    name: 'NodeJs',
    type: 'frameW',
    img: node,
  },
  {
    name: 'ExpressJs',
    type: 'frameW',
    img: express,
  },
  {
    name: 'MongoDB',
    type: 'frameW',
    img: mongo,
  },
  {
    name: 'Tensorflow',
    type: 'frameW',
    img: tensor,
  },
  {
    name: 'Keras',
    type: 'frameW',
    img: keras,
  },
  {
    name: 'Flask',
    type: 'frameW',
    img: flask,
  },
  {
    name: 'Heroku',
    type: 'tools',
    img: heroku,
  },
  {
    name: 'Azure',
    type: 'tools',
    img: azure,
  },
];

const useStyles = makeStyles(() => ({
  skillsRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    ['@media (max-width:700px)']: {
      height: '100%',
    },
  },
  skillsContent: {
    height: '60vh',
    width: '80%',
    ['@media (max-width:700px)']: {
      width: '80%',
      height: '100%',
    },
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
  skillsDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
}));

function Skills() {
  const classes = useStyles();
  const [currentidx, setidx] = useState(0);
  const CheckStatus = (idx) => {
    console.log(idx);
    setidx(idx);
  };
  return (
    <div id="skills" className={classes.skillsRoot}>
      <div className={classes.skillsContent}>
        <SkillsTopBar activeIndex={(idx) => CheckStatus(idx)} />
        <div className={classes.skillsDiv}>
          {currentidx == 0
            ? SkillsData.map((i, idx) => (
                <SkillsCard name={i.name} img={i.img} />
              ))
            : null}
          {currentidx == 1
            ? SkillsData.filter((i) => {
                if (i.type === 'lang') {
                  return i;
                }
              }).map((i, idx) => <SkillsCard name={i.name} img={i.img} />)
            : null}
          {currentidx == 2
            ? SkillsData.filter((i) => {
                if (i.type === 'frameW') {
                  return i;
                }
              }).map((i, idx) => <SkillsCard name={i.name} img={i.img} />)
            : null}
          {currentidx == 3
            ? SkillsData.filter((i) => {
                if (i.type === 'tools') {
                  return i;
                }
              }).map((i, idx) => <SkillsCard name={i.name} img={i.img} />)
            : null}
        </div>
      </div>
      <div className={classes.headerSideDiv}>
        <span className={classes.sectiontitile}>
          S<br />K<br />
          I<br />
          L<br />
          L<br />
          S<br />
        </span>
      </div>
    </div>
  );
}

export default Skills;
