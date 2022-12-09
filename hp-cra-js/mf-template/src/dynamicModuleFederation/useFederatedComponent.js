import { lazy, useEffect, useState } from 'react';
import loadComponent from './componentLoaderFromWebpackContainer';
import useDynamicScript from './useDynamicScript';

export default function useFederatedComponent({ remoteUrl, appName, moduleToImport }) {
  const key = `${remoteUrl}-${appName}-${moduleToImport}`;

  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (Component) setComponent(null);
  }, [key]);

  const { isError, isReady } = useDynamicScript(remoteUrl);

  useEffect(() => {
    if (isReady && !Component) {
      const Comp = lazy(loadComponent(appName, moduleToImport));
      setComponent(Comp);
    }
  }, [isReady, key, Component]);

  return { isError, Component };
}
