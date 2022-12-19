import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RemoteApp from './remoteApp';
import remoteApps from './remoteApps.json';
import RouteHandler from './routeHandler';

// @ts-ignore
import { useCount } from 'redux/store';

function App() {
  const { count, clear } = useCount();

  return (
    <div className='bg-gray-600 pt-10 text-white min-h-screen'>
      <div className='max-w-6xl text-3xl mx-auto'>
        <div className='mb-10 flex'>
          <div>
            <div>Name: Shell App CRA</div>
            <div>Framework: react</div>
            <div>Language: TypeScript</div>
            <div>CSS: Tailwind</div>
          </div>
          <div className='ring-2 ring-pink-300 rounded ml-12 px-4 text-2xl flex flex-col items-center justify-center'>
            <div className='text-xl'>Centralized Redux stuff</div>
            <div className=' font-semibold'>Count: {count}</div>

            <button onClick={clear} className='bg-slate-400 text-white px-4 mt-4 rounded'>
              Clear
            </button>
          </div>
        </div>

        <div className='mt-10'>
          <BrowserRouter>
            {remoteApps.map(app => (
              <Link key={app.appName + app.moduleToImport} to={app.localRoute} className='bg-green-600 px-4 py-2 rounded text-white mr-4'>
                load {app.appName}
              </Link>
            ))}
            <Routes>
              <Route path='/test/' element={<div>test route</div>} />
              <Route path=':remoteApp/*' element={<RemoteApp />} />
              <Route path='*' element={<RouteHandler />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
