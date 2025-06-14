// css import
import './index.css';

// react functionalities import 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages import
import MainPage from './pages/MainPage/MainPage';

// components import

function App() {

  if(localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
  }
  else {
    document.documentElement.setAttribute('data-theme', 'normal');
    localStorage.setItem('theme','normal');
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;