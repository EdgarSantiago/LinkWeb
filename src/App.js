import React from 'react'
import {Navbar} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GlobaStyle from './globalStyles'
import Home from './pages/HomePage/Home'
function App() {
  return (
    <Router>
      <GlobaStyle/>
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
