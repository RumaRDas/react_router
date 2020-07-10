import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import About from './components/About';
import './App.css';



function App() {
  return (
    <div className="App">

    <Nav />

<Home />
<About/>
<Shop />
<Contact/>

    </div>
  );
}

export default App;
