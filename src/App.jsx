import React from "react";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";


function App() {
  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/* <Route  path= "*" element={<NotFoundPage/>}/> */}
      </Routes>
      
        </>
  );
}

export default App;

