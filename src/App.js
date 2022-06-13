import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail/:id" element={<ProjectDetail></ProjectDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
