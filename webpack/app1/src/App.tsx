import React from 'react';
import ReactDOM from 'react-dom/client';

import MainLayout from 'app1/MainLayout';

import './index.scss';

const App = () => (
  <div className='bg-gray-700 text-white min-h-screen'>
    <MainLayout />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
