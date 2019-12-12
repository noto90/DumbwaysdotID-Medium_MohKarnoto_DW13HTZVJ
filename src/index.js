import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OneZero from './components/CategoryPage';
import ArtikelDetail from './components/ArtikelDetail';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/Home" component={App} />
            <Route path="/ArtikelDetail/1" component={ArtikelDetail} />
            {/* <Route path="/Login" component={Login} /> */}
            <Route path="/OneZero" component={OneZero} />
            {/* <Route path="/CategoryPage" component={CategoryPage} /> */}
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
