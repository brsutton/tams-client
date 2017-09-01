/*
Create the store here and provide it to the application
*/
//test stuff again and again and again
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/app';

const store = createStore(reducers);

ReactDOM.render(<Provider store = {store}>
    <App/>
</Provider>
,document.getElementById('root'));