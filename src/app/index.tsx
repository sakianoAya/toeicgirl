import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 假設你有樣式文件
import App from '../App'; // 假設你有App組件

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
