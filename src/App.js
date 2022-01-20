import './App.css';
import { ScatterBoxLoader } from 'react-awesome-loaders';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import InfoSection from './components/InfoSection/InfoSection';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

const useStyles = makeStyles(() => ({
  loaderWrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  loaderText: {
    fontSize: '30px',
    fontFamily: 'Prompt',
    fontWeight: '500',
    color: 'white',
    marginBottom: '5rem',
  },
}));

function App() {
  const classes = useStyles();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5200);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className={classes.loaderWrapper}>
          <span className={classes.loaderText}>
            <Typewriter
              words={['Compiling...']}
              loop
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <ScatterBoxLoader
            className="loader"
            primaryColor={'#FF5C58'}
            background="#0B0C10"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <InfoSection />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
