import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root/Root';
import UserProvider from './providers/CurrentUser';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Root />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
