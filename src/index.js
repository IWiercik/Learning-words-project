import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root/Root';
import Providers from './providers/Providers';
import { store } from 'store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <Provider store={store}>
        <Root />
      </Provider>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);
