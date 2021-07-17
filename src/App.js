import React from 'react'
import {Navbar} from './components'
import {BrowserRouter as Router, Switch, route} from 'react-router-dom'
import GlobaStyle from './globalStyles'
function App() {
  return (
    <Router>
      <GlobaStyle/>
      <Navbar/>
    </Router>
  );
}

export default App;
