import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllItems, getItem } from 'app1/apis';

export default function ItemPage() {
  const { id } = useParams();
  const [item, setItem] = useState<{ id: string; name: string }>();

  useEffect(() => {
    if (id && id.length) {
      getItem(id).then(item => setItem(item));
    } else setItem(undefined);
  }, [id]);

  if (!item) return <div className='text-red-400 text-2xl'>Item not found</div>;
  else
    return (
      <div className='text-center min-h-screen text-xl'>
        <div className='text-green-500'>ID: {item.id}</div>
        <div className='text-green-300'>name: {item.name}</div>

        <button className='px-6 py-4 bg-blue-600 text-white rounded mt-12'>Does Nothing</button>
      </div>
    );
}
