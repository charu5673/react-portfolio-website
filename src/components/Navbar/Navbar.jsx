// css import
import '../../index.css';
import './navbar.css'

// react functionalities import 

// pages import


// components import
import ThemeButton from '../ThemeButton/ThemeButton';


// hooks import
import useTheme from '../../hooks/useTheme';


function Navbar() {

  const { theme } = useTheme();

  return (
    <div className='navbar-outer'>
      <h2 className={ theme == 'alt' ? 'shadow' : '' }>Charu Mishra</h2>
      <ThemeButton />
    </div>
  );
}

export default Navbar;
