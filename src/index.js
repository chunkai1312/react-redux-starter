import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import configureStore from './store/configureStore'
import Root from './containers/Root'
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css'

const preloadedState = window.__PRELOADED_STATE__
const history = createBrowserHistory();
const store = configureStore(history, preloadedState);
const rootElement = document.getElementById('root');

ReactDOM.render(<Root store={store} history={history} />, rootElement);

registerServiceWorker();
