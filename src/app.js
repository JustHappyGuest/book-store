import "./app.css";

import { Container } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";

import { withBookstoreService } from "./hoc/";
import CartPage from './pages/cart-page';
import Header from "./components/header";
import HomePage from "./pages/home-page";


const App = () => (
  <Fragment>
    <Header />
    <Container>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} exact />
    </Switch>
    </Container>
  </Fragment>
);

export default withBookstoreService()(App);
