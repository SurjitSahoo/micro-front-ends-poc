import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <div>Name: App3 Favorites</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
