import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import AppDetails from './pages/AppDetails/AppDetails';
import NotFound from './pages/NotFound/NotFound';
import Create from './pages/Create/Create';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
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
