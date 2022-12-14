import ReactDOM from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import RemoteApp from './remoteApp';
import remoteApps from './remoteApps.json';
import './index.scss';

const App = () => {
  return (
    <div className='pt-10 text-3xl mx-auto max-w-6xl bg-gray-600 text-white min-h-screen'>
      <div>Name: Webpack Shell-App</div>
      <div>Framework: react 18</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
      <BrowserRouter>
        <div className='mt-10'>
          {remoteApps.map(app => (
            <Link key={app.appName + app.moduleToImport} to={app.localRoute} className='bg-green-600 px-4 py-2 rounded text-white mr-4'>
              load {app.appName}
            </Link>
          ))}
          <Routes>
            <Route path='/test' element={<div>test route</div>} />
            <Route path='/:remoteApp/*' element={<RemoteApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('app'));
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
