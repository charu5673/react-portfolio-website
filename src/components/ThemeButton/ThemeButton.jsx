// css import
import '../../index.css';
import './themebutton.css';

// react functionalities import 


// pages import


// components import


// hooks import
import useTheme from '../../hooks/useTheme';




function ThemeButton() {

  const { toggleTheme } = useTheme();

  return (
    <button className='toggle-theme-button' onClick={toggleTheme}>
    </button>
  );
}

export default ThemeButton;
