// css import
import '../../index.css';
import './mainpage.css';

// react functionalities import 
import { useRef } from 'react';


// pages import


// components import
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';


// hooks import


function MainPage() {

  const heroRef = useRef();
  const projectsRef = useRef();
  const experienceRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();

  return (
    <>
      <Navbar heroRef={heroRef} projectsRef={projectsRef} experienceRef={experienceRef} skillsRef={skillsRef} contactRef={contactRef} />
      <Hero ref={heroRef} />
      <Projects ref={projectsRef} />
      <Experience ref={experienceRef} />
      <Skills ref={skillsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default MainPage;
