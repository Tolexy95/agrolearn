import React from "react";
import { Routes, Route } from "react-router-dom";

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
        <Route exact path="/signUp" element={<AboutPage/>} />
        <Route exact path="/signUp" element={<CoursesPage/>} />
        <Route exact path="/signUp" element={<ContactPage/>} />
        <Route exact path="/signUp" element={<ServicesPage/>} />
        <Route exact path="/signUp" element={<PartnerPage/>} />

        {/* <Route  path= "*" element={<NotFoundPage/>}/> */}
      </Routes>
      
        </>
  );
}

export default App;

