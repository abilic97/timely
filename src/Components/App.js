import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import HomePage from "../pages/home";
import ProjectPage from "../pages/project";

function App() {
    return (
      <div className="container">
        <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" exact element={ <HomePage />} />
            <Route path="/projects" exact element={ <ProjectPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
  export default App;