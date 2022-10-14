import React from 'react'

import './App.css';
import Nav  from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/row';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row></Row>
    </div>
  );
}

export default App;
