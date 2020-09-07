import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import CounterConnector from './connectors/CounterConnector';
import Page2Connector from './connectors/Page2Connector';

const HomePage = () => <>
 <Provider store={store}>
  <Router>
    <Link to="page1">Page 1</Link> | 
    <Link to="/page2">Page 2</Link> | 
    <Link to="/">App</Link>  
    <Switch>
      <Route path='/page1'>
          <CounterConnector /> 
      </Route>
      <Route path='/page2'>
        <Page2Connector />
      </Route>
      <Route path="/" exact={false}>
        <App />
      </Route>
      </Switch>
  </Router>
  </Provider>
</>;

export default HomePage;
