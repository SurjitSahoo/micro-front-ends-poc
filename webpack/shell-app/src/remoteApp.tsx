import React, { ComponentType, LazyExoticComponent, Suspense, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useFederatedComponent from './dynamicModuleFederation';
import remoteApps from './remoteApps.json';

interface IDynamicModule {
  remoteUrl: string;
  moduleToImport: string;
  appName: string;
}

interface Props {
  app: IDynamicModule;
}

function RemoteApp({ app }: Props) {
  // const { Component: RemoteComponent, isError } = useFederatedComponent(app.remoteUrl, app.appName, app.moduleToImport);
  const { Component: Hello } = useFederatedComponent({ ...app, moduleToImport: './hello' });

  return (
    <div className='mx-2 my-3 ring-2 ring-yellow-400 p-2'>
      <Suspense fallback='loading...'>
        {Hello && <Hello />}
        {/* {isError ? (
          <div>
            Error loading {app.moduleToImport} from {app.appName}
          </div>
        ) : (
          RemoteComponent && <RemoteComponent />
        )} */}
      </Suspense>
    </div>
  );
}

export default function RemoteAppContainer() {
  const { remoteApp } = useParams();
  const appToLoad = useMemo(() => remoteApps.find(app => app.localRoute === remoteApp), [remoteApp]);

  if (!appToLoad) return <div>App not found</div>;

  return <RemoteApp app={appToLoad} />;
}
