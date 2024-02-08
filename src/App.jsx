import './App.css';
import {Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './contact';
import kal from './assets/kal.png'
function App() {
  return (
      <>
       <nav>
        <NavLink to='/'><img src={kal} className='img'/></NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to="/form">form</NavLink>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Contact />} />
        </Routes>

    </>
  );
}

export default App;
