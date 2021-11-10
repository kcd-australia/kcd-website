
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Calls from './pages/Calls.js'
import Contact from './pages/Contact.js'
import Home from './pages/Home.js'

function App() {
  return (
    <div className="App">
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <NavLink className="nav-link" to="/schedule">Schedule</NavLink>
        <NavLink className="nav-link" to="/meetup">Attend a meetup</NavLink>
        <NavLink className="nav-link" to="/calls">Calls for proposals</NavLink>
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </nav>

      <div className="body-container">
        <Routes>

          <Route path="/" exact element={<Home/>}/>

          {/* <Route path="/schedule" element={<Schedule/>}/>

          <Route path="/meetup" element={<Meetup/>}/> */}

          <Route path="/calls" element={<Calls/>}/>

          <Route path="/contact" element={<Contact/>}/>

          <Route path="/" element={<Home/>}/>

        </Routes>
      </div>

      <footer class="body-footer">
        <p>kcd-australia 2021 </p>
        <a href="https://github.com/kcd-australia" target="_blank" rel="noreferrer"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="footer-logo"/></a>
      </footer>
    </div>
  );
}

export default App;
