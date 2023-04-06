import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import ContactMe from './ContactMe';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import AboutMe from './AboutMe';
import CertfCards from './Certificates';



import { Routes, Route } from 'react-router-dom';
function App() {
  const [likes, incrementLikes] = useState(0);
  return (
    <>
      <Navbar />
      <div style={{ border: "1px solid white", borderRadius: "100%", height: "65px", width: "65px", position: "fixed", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bottom: "100px", right: "50px", zIndex: "5", background: "yellow",userSelect:"none" }}>
        <span class="material-symbols-outlined" style={{ cursor: "pointer" }} onClick={() => incrementLikes(likes => likes + 1)}>thumb_up</span>
        <span>{likes}</span>
      </div>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="/contact" element={<ContactMe name="Achkon" />} /> */}
        <Route exact path="/contact" element={<ContactMe />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/certificates" element={<CertfCards />} />
        {/* <Route exact path="/certificates" element={<Certificates />} /> */}
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
