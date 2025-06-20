// css import
import './navbar.css'

// react functionalities import 

// pages import


// components import
import ThemeButton from '../ThemeButton/ThemeButton';


// hooks import
import useTheme from '../../hooks/useTheme';


function Navbar({heroRef, projectsRef, skillsRef, experienceRef, contactRef}) {

  const { theme } = useTheme();

  const scroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='navbar-outer'>
      <h2 className={ theme == 'alt' ? 'shadow' : '' }>Charu Mishra</h2>
      <button className='scroll-button' onClick={()=>{scroll(heroRef)}} >Home</button>
      <button className='scroll-button' onClick={()=>{scroll(projectsRef)}} >Projects</button>
      <button className='scroll-button' onClick={()=>{scroll(experienceRef)}} >Experience</button>
      <button className='scroll-button' onClick={()=>{scroll(skillsRef)}} >Skills</button>
      <button className='scroll-button' onClick={()=>{scroll(contactRef)}} >Contact</button>
      <ThemeButton />
    </div>
  );
}

export default Navbar;
