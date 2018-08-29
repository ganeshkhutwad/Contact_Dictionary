/**
@author Ganesh Khutwad
    - It is entry point of application.
    - Pass store to all components using `Provider` class.
    - Render `App` component
    - Bootstrap the application.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './index.css';
import { App } from 'containers';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
