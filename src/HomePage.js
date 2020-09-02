import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';
import {Provider} from 'react-redux'

const HomePage = () => <>
<Router>
    <Link to="/page1" >Page1</Link> |
    <Link to="/page2" >Page2</Link> |
    <Link to="/" >App</Link>

    <Switch>
        <Router path="/page1">
            <Page1 />
        </Router>
        <Router path="/page2">
            <Page2 />
        </Router>
        <Router path="/" exact={false}>
            <App />
        </Router>
    </Switch>
</Router>
</>;

export default HomePage;

