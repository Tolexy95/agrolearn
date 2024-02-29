import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import PartnerPage from "./pages/Partners";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";



function App() {
  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<AboutPage/>} />
        <Route exact path="/courses" element={<CoursesPage/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
        <Route exact path="/service" element={<ServicesPage/>} />
        <Route exact path="/partner" element={<PartnerPage/>} />

        {/* <Route  path= "*" element={<NotFoundPage/>}/> */}
      </Routes>
      
        </>
  );
}

export default App;

