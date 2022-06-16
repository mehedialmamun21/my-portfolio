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

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/detail/:id" element={<ProjectDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
