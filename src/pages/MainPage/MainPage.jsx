// css import
import '../../index.css';
import './mainpage.css';

// react functionalities import 


// pages import


// components import
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Projects from '../../components/Projects/Projects';


// hooks import


function MainPage() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      {/* <Experience />
      <Skills />
      <Contact />
      <Resume />
      <Footer /> */}
    </>
  );
}

export default MainPage;
