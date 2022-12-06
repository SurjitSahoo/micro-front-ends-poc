/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, LazyExoticComponent, useEffect, useState, ComponentType } from 'react';
import loadComponent from './componentLoaderFromWebpackContainer';
import useDynamicScript from './useDynamicScript';

type LazyComponent = LazyExoticComponent<ComponentType<any>>;

interface IFederateComponentOptions {
  remoteUrl: string;
  appName: string;
  moduleToImport: string;
}

export default function useFederatedComponent({ remoteUrl, appName, moduleToImport }: IFederateComponentOptions) {
  const key = `${remoteUrl}-${appName}-${moduleToImport}`;

  const [Component, setComponent] = useState<LazyComponent | null>(null);

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
