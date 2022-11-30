import React from 'react';
import { Link } from 'react-router-dom';

interface Item {
  id: string;
  name: string;
  isFavorite: boolean;
}

interface Props {
  item: Item;
}
export default function Item({ item }: Props) {
  return (
    <Link to={'/' + item.id} className='px-4 py-2 ring-1 ring-green-200 m-4 rounded cursor-pointer block'>
      <div className='text-green-500'>ID: {item.id}</div>
      <div className='text-green-300'>name: {item.name}</div>
    </Link>
  );
}
