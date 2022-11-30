import React from 'react';
import ReactDOM from 'react-dom/client';

import MainLayout from 'app1/MainLayout';

import './index.scss';
import useCounter from './useCounter';

const App = () => {
  const count = useCounter();

  return (
    <div className='bg-gray-600 text-white min-h-screen'>
      <div className='text-center'>Random Counter: {count}</div>
      <MainLayout />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
