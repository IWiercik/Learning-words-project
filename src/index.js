import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import Root from 'views/Root/Root';
import Providers from './providers/Providers';
import { store } from 'store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <Provider store={store}>
        <Root />
      </Provider>
    </Providers>
  </React.StrictMode>
);
