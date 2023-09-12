import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from '@pages/Landing/Landing';
import colors from '../theme.config.json' assert { type: 'json' };
import UseNotificationHandler from '@components/notification-handler/UseNotificationHandler';
import { Provider } from 'react-redux';
import { store } from '@store';
import { ConfigProvider } from 'antd';
import { App } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.primary,
          colorInfo: colors.primary,
          colorSuccess: colors.confirm,
          colorError: colors.error,
          colorTextBase: colors.text,
          colorBgBase: colors.background,
        },

        components: {
          Notification: {
            colorBgElevated: colors.secondary,
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
