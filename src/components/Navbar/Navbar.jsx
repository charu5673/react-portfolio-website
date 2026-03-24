// css import
import './navbar.css'

// react functionalities import 

// pages import


// components import



function Navbar({heroRef, projectsRef, skillsRef, experienceRef, contactRef}) {


  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='navbar-outer'>
      <h2 className='shadow'>Charu Mishra</h2>
      <button className='scroll-button' onClick={()=>{scroll(heroRef)}} >Home</button>
      <button className='scroll-button' onClick={()=>{scroll(projectsRef)}} >Projects</button>
      <button className='scroll-button' onClick={()=>{scroll(experienceRef)}} >Experience</button>
      <button className='scroll-button' onClick={()=>{scroll(skillsRef)}} >Skills</button>
      <button className='scroll-button' onClick={()=>{scroll(contactRef)}} >Contact</button>
    </div>
  );
}

export default Navbar;
