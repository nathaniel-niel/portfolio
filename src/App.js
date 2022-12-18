import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './containers/Home';
import Project from './containers/Project'

function App() {
  return (
    <Router basename='/portfolio'>
      <Routes>
        <Route exact path='/' element={< Home />}/>
        {/* <Route exact path='/project' element={< Project />}/> */}
      </Routes>
    </Router>
  );
}

export default App;