import React from 'react';
import Favorites from 'app3/Favorites';

export default function Header() {
  return (
    <div className='bg-green-700 text-white flex justify-between items-center px-32'>
      <span>Header Home</span>
      <Favorites />
    </div>
  );
}
