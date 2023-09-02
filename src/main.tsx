import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from '@pages/Landing/Landing';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ConfigProvider } from 'antd';
import colors from './theme.config.json' assert { type: 'json' };

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
        },
      }}
    >
      <Provider store={store}>
        <Landing></Landing>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
