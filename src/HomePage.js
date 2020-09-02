import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from 'react-router-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';



import { Provider } from 'react-redux';
import store from './store/store';

const HomePage = () => <>
  <Router>
    <Link to="page1">Page 1</Link> | 
    <Link to="/page2">Page 2</Link> | 
    <Link to="/">App</Link>
  
    <Switch>
      <Route path='/page1'>
        <Provider store={store}>
          <Page1 />
        </Provider>
      </Route>
      <Route path='/page2'>
        <Page2 />
      </Route>
      <Route path="/" exact={false}>
        <App />
      </Route>
    </Switch>
  </Router>
</>;

export default HomePage;
