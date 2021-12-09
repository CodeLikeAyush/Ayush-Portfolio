import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import ContactMe from './ContactMe';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import MyJourney from './MyJourn';
import CustomizedSnackbars from './SnackBar';



import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      {/* <CustomizedSnackbars /> */}
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        {/* <Route exact path="/contact" element={<ContactMe name="Achkon" />} /> */}
        <Route exact path="/contact" element={<ContactMe />} />
        <Route exact path="/journey" element={<MyJourney />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
