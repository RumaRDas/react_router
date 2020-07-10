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
    <Route  path="/"  component={Home}/>
    <Route path ="/about" component={About}/>
    <Route  path ="/shop" component={Shop}/>
    <Route path ="/contact" component={Contact}/>
    </div>
    </Router>

  );
}

export default App;
