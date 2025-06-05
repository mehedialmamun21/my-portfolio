import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';
import Blogs from './Pages/Blogs/Blogs';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import GoToTop from './components/GoToTop';
import Education from './Pages/Education/Education';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/detail/:id" element={<ProjectDetail />}></Route>
      </Routes>
      <GoToTop />
    </div>
  );
}

export default App;