import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import { BookstoreServiceProvider } from './components/bookstore-service-context/';

import BookstoreService from './services/bookstore-service';

import store from './store';

import App from './app';
import ErrorBoundry from './components/error-boundry/';

import 'semantic-ui-css/semantic.min.css';

const bookstoreService = new BookstoreService();

render(
    <Provider store={store}>
        <ErrorBoundry>
            <BookstoreServiceProvider value={bookstoreService}>
                <Router>
                    <App />
                </Router>
            </BookstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root"));