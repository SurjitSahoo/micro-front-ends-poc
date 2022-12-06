import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from 'app1/Footer';
import Header from 'app1/Header';
import HomeContent from 'app1/HomeContent';
import ItemPage from 'app2/ItemPage';
import useCounter from 'app2/useCounter';

export default function MainLayout() {
  const count = useCounter();

  return (
    <BrowserRouter>
      <div className='text-3xl mx-auto'>
        <Header />
        <div className='text-center text-xl text-yellow-200'>Remote Counter: {count}</div>
        <div className='my-10'>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/:id' element={<ItemPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
