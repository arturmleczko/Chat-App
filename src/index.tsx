import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider} from "react-redux";

import { store } from '@/store/store'
import theme from '@/theme/theme.config';
import Global from '@/styles/global';
import App from '@/components/app/app.component';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);