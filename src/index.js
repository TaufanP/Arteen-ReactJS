import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login'
import LoginWarn from './components/loginWarn'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class AppWithRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path = '/' component = {Login}/>
                <Route path = '/product' exact component = {App}/>
                <Route path = '/loginwarn' component = {LoginWarn}/>
            </Router>
        )
    }
}

ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
