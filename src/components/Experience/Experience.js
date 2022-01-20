import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import ExperienceTopBar from './ExperienceTopBar/ExperienceTopBar';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import OpenSourceCard from './OpenSourceCard/OpenSourceCard';

const useStyles = makeStyles(() => ({
  ExpRoot: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ExpContenT: {
    width: '80%',
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

const InternshipsDetails = [
  {
    companyName: 'StackGuardian',
    Duration: 'Nov 2021 - Present',
    title: 'Frontend Engineer Intern',
    location: 'Remote (Germany)',
    Description: [
      'Exploring StackGuardian as a platform',
      'Implementing new features & resolving bugs using ReactJs framework',
      'Exploring Terraform as a Infrastructure as Code (IAC) tool.',
      'Exploring Open Policy Agent (OPA).',
      'Contributing to Open Source StackGuardian Policy Framewok in python and OPA Rego.',
    ],
  },
  {
    companyName: 'UrMeet',
    Duration: 'Mar 2021 - Jun 2021',
    title: 'Frontend Engineer Intern',
    location: 'Remote (India)',
    Description: [
      'Developed and architectured a responsive frontend workflow for a video conferencing platform.',
      'Brainstormed and collaborated with UI/UX developer to optimize the website wireframe and prototype.',
      'Used Git as distributed version control system to collaboratively work in a team.',
      'Primarily used ReactJs as major framework.',
    ],
  },
];

const OpenSourceDetails = [
  {
    name: 'Open Source Day',
    orgName: 'Anitab.Org',
    Description: [
      'Developed UI components like Footer Section, Video Section, FAQ Section.',
      'Implemented GET endpoint for pyton flask server',
      'Contributed to documentation of the project',
    ],
    GitRepoLink: [
      {
        repoName: 'bridge-in-tech-web',
        link: 'https://github.com/anitab-org/bridge-in-tech-web',
      },
      {
        repoName: 'bridge-in-tech-backend',
        link: 'https://github.com/anitab-org/bridge-in-tech-backend',
      },
    ],
  },
  {
    name: 'LGM Smmer Of Code',
    orgName: 'Lets Grow More',
    Description: [
      'Contributed to MERN based project',
      'Implemented various features for client side as well as server side.',
    ],
    GitRepoLink: [
      {
        repoName: 'Project-Zone',
        link: 'https://github.com/rockingrohit9639/project-zone',
      },
    ],
  },
  {
    name: 'Script Fellowship Program',
    orgName: 'Script Foundation',
    Description: [
      'Contributed to Reactjs Project',
      'Implemented routing and developed landing page.',
    ],
    GitRepoLink: [
      {
        repoName: 'Craft-Brain',
        link: 'https://github.com/scriptfoundation/CraftBrain',
      },
    ],
  },
];

function Experience() {
  const classes = useStyles();
  const [currentidx, setidx] = useState(0);
  const CheckStatus = (idx) => {
    console.log(idx);
    setidx(idx);
  };
  return (
    <div id="exp" className={classes.ExpRoot}>
      <div className={classes.ExpContent}>
        <ExperienceTopBar activeIndex={(idx) => CheckStatus(idx)} />
        <div className={classes.ExpDiv}>
          {currentidx === 0
            ? InternshipsDetails.map((i, index) => {
                return (
                  <ExperienceCard
                    key={index}
                    title={i.title}
                    cname={i.companyName}
                    loc={i.location}
                    duration={i.Duration}
                    descr={i.Description}
                  />
                );
              })
            : null}
          {currentidx === 1
            ? OpenSourceDetails.map((i, index) => {
                return (
                  <OpenSourceCard
                    key={index}
                    title={i.name}
                    org={i.orgName}
                    descr={i.Description}
                    git={i.GitRepoLink[0]}
                  />
                );
              })
            : null}
        </div>
      </div>
      <div className={classes.headerSideDiv}>
        <span className={classes.sectiontitile}>
          E<br />X<br />
          P<br />
          E<br />
          R<br />
          I<br />
          E<br />
          N<br />
          C<br />E
        </span>
      </div>
    </div>
  );
}

export default Experience;
