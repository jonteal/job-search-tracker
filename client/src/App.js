import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import AppDetails from './components/AppDetails/AppDetails';
import NotFound from './pages/NotFound';
import Create from './components/Create/Create';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
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
