import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SideBarProvider from "./context/SideBarProvider.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
// import DarkModeToggle from "./component/DarkModeToggle.jsx";
import ScrollToTop from "./component/scroll/ScrollToTop.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <Router>
      <Provider store={store}>
        <SideBarProvider>
          <ScrollToTop/>
          <App />
        </SideBarProvider>
      </Provider>
    </Router>
  </React.StrictMode>
  
);
