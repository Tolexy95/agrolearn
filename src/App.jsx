import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./component/layout/AppLayout";

//pages
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import CoursesPage from "./pages/Courses";
import PartnerPage from "./pages/Partners";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import Blog from "./pages/Blog";




function App() {
  return (
    <> 
 
      <Routes>
        <Route element={<AppLayout/>}>
        <Route index exact path="/" element={<Home />} />
        <Route  path="/about" element={<AboutPage />} />
        <Route  path="/courses" element={<CoursesPage />} />
        <Route  path="/contact" element={<ContactPage />} />
        <Route  path="/service" element={<ServicesPage />} />
        <Route  path="/partner" element={<PartnerPage />} />
        <Route  path="/blog" element={<Blog/>} />
        </Route>
       

        {/* <Route  path= "*" element={<NotFoundPage/>}/> */}
      </Routes>
   
        </>
  );
}

export default App;

