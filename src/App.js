import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from "./Pages/AboutMe"
import Resume from "./Pages/Resume"
import Projects from "./Pages/Projects"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">AboutMe </Link>
              <Link to="/resume">Resume </Link>
              <Link to="/projects">Projects</Link>
            </nav>
            
            <Route exact path="/" component={()=> <AboutMe/>} />
            <Route path="/resume" component={()=> <Resume/>} />
            <Route path="/projects" component={()=> <Projects/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
