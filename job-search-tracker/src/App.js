import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div>
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
