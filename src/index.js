import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import rootReducer from './roots/rootReducer/rootReducer';


function init() {
    const store = createStore(rootReducer)
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

init();

reportWebVitals();
