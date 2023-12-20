import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {App} from './App';
import {store} from './store/index';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import './styles/Index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ConfigProvider locale={ruRU}>
                <App />
        </ConfigProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
