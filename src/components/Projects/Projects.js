import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ProjectCard from './ProjectCard/ProjectCard';

const useStyles = makeStyles(() => ({
  ProjectRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  projectContent: {
    width: '80%',
    display: 'flex',
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
  ExpDiv: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '4rem',
  },
}));

const projectsList = [
  {
    name: 'Social Media Intelligence System',
    techStack: ['ReactJs', 'Python-Flask'],
    description: [
      'A web-based real-time social media monitoring system/Alerting system',
      'Used React.js framework for frontend and Python-based flask framework for the backend',
      'API is deployed on Microsoft Azure and the web dashboard is deployed on fastcomet',
    ],
    github: 'https://github.com/naveen8801/tleafservices-smis',
  },
  {
    name: 'CovidTimes',
    techStack: ['ReactJs', 'Python-Flask', 'SocketIO', 'Firebase'],
    description: [
      'Realtime twitter sentimental analysis for Covid-19 tweets using SocketIO',
      'Used ReactJS as a frontend framework and python-flask as a backend framework',
      'Used LSTM Neural networks for text classification',
      'Deployed to google firebase hosting',
    ],
    github: 'https://github.com/naveen8801/covidTimes',
  },
  {
    name: 'Vote-Me',
    techStack: ['ReactJs', 'NodeJS', 'ExpressJS', 'MongoDB', 'Netlify'],
    description: [
      'Realtime e-voting application using MERN stack',
      'Realtime data visualization using chart.js',
      'Deployed to netlify hosting service',
    ],
    github: 'https://github.com/naveen8801/VoteMe-webapp',
  },
  {
    name: 'gFormJS',
    techStack: ['React-ink', 'OAuth'],
    description: ['A CLI tool to create google form through CLI'],
    github: 'https://github.com/naveen8801/gFormJS',
  },
  // {
  //   name: 'Amazon-Clone',
  //   techStack: ['ReactJs', 'Firebase'],
  //   description: [
  //     'Fully featured amazon clone using ReactJS',
  //     'Payment functionality using stripe payment',
  //     'Deployed to google firebase hosting',
  //   ],
  //   github: 'https://github.com/naveen8801/my_amazon-clone',
  // },
];

function Projects() {
  const classes = useStyles();
  return (
    <div id="projects" className={classes.ProjectRoot}>
      <div className={classes.projectContent}>
        {projectsList.reverse().map((item, index) => (
          <ProjectCard
            title={item.name}
            git={item.github}
            descr={item.description}
            key={index}
          />
        ))}
      </div>
      <div className={classes.headerSideDiv}>
        <span className={classes.sectiontitile}>
          P<br />R<br />
          O<br />
          J<br />
          E<br />
          C<br />
          T<br />
          S<br />
        </span>
      </div>
    </div>
  );
}

export default Projects;
