// css import
import '../../index.css';
import './mainpage.css';

// react functionalities import 


// pages import


// components import
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';
import Experience from '../../components/Experience/Experience';


// hooks import


function MainPage() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      {/* <Skills />
      <Contact />
      <Resume />
      <Footer /> */}
    </>
  );
}

export default MainPage;
