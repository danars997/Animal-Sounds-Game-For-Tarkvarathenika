import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Nav';
import Shop from './components/Shop/index';
import Catagories from './components/Catagories';
import AboutUs from './components/AboutUs';
import './App.css';

export default class extends Component {

    renderRoutes() {
        return (
            <Switch>
                <Route exact path='/shop' component={Shop}/>
                <Route exact path='/catagories' component={Catagories}/>
                <Route exact path='/aboutUs' component={AboutUs}/>
            </Switch>
        );
    }

    render() {
        return (
            <HashRouter>
                <div className='App'>
                    <Header />
                    {(this.renderRoutes())}
                </div>
            </HashRouter>
        );
    }
}