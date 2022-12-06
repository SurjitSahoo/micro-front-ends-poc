import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className='mt-10 text-3xl mx-auto max-w-6xl bg-gray-600 text-white min-h-screen'>
      <div>Name: react-mf-template</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Tailwind</div>
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<div>Test route</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
