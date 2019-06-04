import React, {Fragment} from 'react';

import {Switch, Route} from 'react-router-dom';

import {withBookstoreService} from './hoc/';

import './app.css';
import HomePage from './pages/home-page';
import Header from './components/header';

const App = () => (
    <Fragment>
        <Header/>
        <Switch>
            <Route path="/" component = {HomePage}/>
        </Switch>
    </Fragment>
);

export default withBookstoreService()(App);