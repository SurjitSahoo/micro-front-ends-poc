import { useEffect, useState } from 'react';

export const urlCache = new Set<string>();

export default function useDynamicScript(url: string) {
  const [isReady, setIsReady] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url || url.length === 0) return;

    if (urlCache.has(url)) {
      setIsReady(true);
      setIsError(false);
      return;
    }

    setIsReady(false);
    setIsError(false);

    const element = document.createElement('script');
    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setIsReady(true);
    };

    element.onerror = () => {
      setIsReady(false);
      setIsError(true);
    };

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return { isReady, isError };
}
