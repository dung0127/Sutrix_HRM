import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/header'
import Login from './components/login'
import Filter from './components/filter'
import ResultList from './components/resultList'
import InformationDetail from './components/informationDetail'
import Information from './components/information'
import * as serviceWorker from './serviceWorker';
import Result from './components/result'

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(
    <Router>
        <Route path = '/' exact component = {App} />
        <Route path = '/filter' exact component = {Filter} />
        <Route path = '/login' exact component = {Login} />
        <Route path = '/information/:hello' exact component = {Information} />
        <Route path = '/informationDetail' component = {InformationDetail} />
        <Route path = '/result' exact component = {Result} />
        <Route path = '/resultlist' exact component = {ResultList} />
        
        
    </Router>
    , document.getElementById('root')
);

serviceWorker.unregister();
