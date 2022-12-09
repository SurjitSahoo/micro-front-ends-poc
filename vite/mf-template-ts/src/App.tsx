import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Hello from 'app1/hello';
import React from 'react';
// @ts-ignore
const Hello = React.lazy(() => import('app1/hello'));

function App() {
  return (
    <div className='bg-gray-600 pt-10 text-white min-h-screen'>
      <div className='max-w-6xl text-3xl mx-auto'>
        <div>Name: Vite react-mf-template</div>
        <div>Framework: Vite react</div>
        <div>Language: TypeScript</div>
        <div className='mb-10'>CSS: Tailwind</div>

        <React.Suspense>
          <Hello />
        </React.Suspense>
        <BrowserRouter>
          <Routes>
            <Route path='/test' element={<div>test route</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
