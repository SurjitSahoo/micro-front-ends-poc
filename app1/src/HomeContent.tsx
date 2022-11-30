import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllItems } from 'app1/apis';
import Item from 'app2/Item';

export default function HomeContent() {
  const [items, setItems] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    getAllItems().then(data => setItems(data));
  }, []);

  if (items.length === 0) return <div className='text-yellow-300'>Loading items...</div>;
  else
    return (
      <div>
        {items.map(item => (
          <Item key={item.id} {...{ item }} />
        ))}
        <img src='/images/image.JPG' />
      </div>
    );
}
