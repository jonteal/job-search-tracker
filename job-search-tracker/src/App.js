import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import AppDetails from './AppDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/apps/:id'>
            <AppDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
