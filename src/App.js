import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Route exact path="/"component={Home}/>
    <Route exact path ="/about" component={About}/>
    <Route exact path ="/shop" component={Shop}/>
    <Route exact path ="/contact" component={Contact}/>
    </div>
    </Router>

  );
}

export default App;
