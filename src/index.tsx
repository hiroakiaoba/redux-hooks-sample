import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { rootReducer } from './modules';
import App from './components/App';

import 'semantic-ui-css/semantic.min.css';

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware());
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
