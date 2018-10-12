import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as singleSpa from 'single-spa';
import { registerChildOneApp } from './app-registrations/child-one-app';
import { registerChildTwoApp } from './app-registrations/child-two-app';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

registerChildOneApp();
registerChildTwoApp();

singleSpa.start();