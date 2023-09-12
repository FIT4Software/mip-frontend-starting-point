import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from '@pages/Landing/Landing';
import theme from '../project.config.json' assert { type: 'json' };
import UseNotificationHandler from '@components/notification-handler/UseNotificationHandler';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ConfigProvider } from 'antd';
import { App } from 'antd';
import axios from 'axios';

axios.defaults.baseURL = theme.apiUrl;
document.title = theme.name;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.colors.primary,
          colorInfo: theme.colors.primary,
          colorSuccess: theme.colors.confirm,
          colorError: theme.colors.error,
          colorTextBase: theme.colors.text,
          colorBgBase: theme.colors.background,
        },

        components: {
          Notification: {
            colorBgElevated: theme.colors.secondary,
          },
        },
      }}
    >
      <App>
        <Provider store={store}>
          <UseNotificationHandler>
            <Landing></Landing>
          </UseNotificationHandler>
        </Provider>
      </App>
    </ConfigProvider>
  </React.StrictMode>
);
