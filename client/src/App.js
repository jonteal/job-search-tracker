import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import { StoreProvider } from './utils/GlobalState';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Wishlist from './components/Wishlist/Wishlist';
import Pending from './components/Pending/Pending';
import Offers from './components/Offers/Offers';
import Denied from './components/Denied/Denied';
import AddApp from './components/AddApp/AddApp';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider> */}
            {/* <Navbar /> */}
              <Switch>
                <Route exact path='/home' component={Dashboard} />
                <Route exact path='/wishlist' component={Wishlist} />
                <Route exact path='/pending' component={Pending} />
                <Route exact path='/offers' component={Offers} />
                <Route exact path='/denials' component={Denied} />
                <Route exact path='/addapp' component={AddApp} />
              </Switch>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
