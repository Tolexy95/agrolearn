import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SideBarProvider from "./context/SideBarProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <SideBarProvider>
        <App />
      </SideBarProvider>
    </Router>
  </React.StrictMode>
);
