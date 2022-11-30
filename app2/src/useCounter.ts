import { useEffect, useState } from 'react';

export default function useCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCount(count + 1), 1000);

    return () => clearInterval(timer);
  });

  return count;
}
