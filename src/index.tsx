import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const app = document.getElementById('root');
if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
