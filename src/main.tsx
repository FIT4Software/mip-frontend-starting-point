import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from '@pages/Landing/Landing';
import { Provider } from 'react-redux';
import { store } from '@store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Landing></Landing>
    </Provider>
  </React.StrictMode>
);
