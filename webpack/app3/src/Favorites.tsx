import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { getAllItems } from 'app1/apis';

export default function Favorites() {
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    getAllItems().then(data => setFavCount(data.length));
  }, []);

  return (
    <Link to='../favorites' className='flex text-yellow-600'>
      <AiFillStar />
      {favCount}
    </Link>
  );
}
