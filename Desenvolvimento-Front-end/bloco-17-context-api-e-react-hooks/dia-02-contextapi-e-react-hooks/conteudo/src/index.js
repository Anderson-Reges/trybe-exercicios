import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './context/Provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

