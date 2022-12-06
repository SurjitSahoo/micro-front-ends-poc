import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RemoteApp from './remoteApp';
import remoteApps from './remoteApps.json';

function App() {
  return (
    <div className='bg-gray-600 pt-10 text-white min-h-screen'>
      <div className='max-w-6xl text-3xl mx-auto'>
        <div>Name: Shell App</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div className='mb-10'>CSS: Tailwind</div>

        <div className='mt-10'>
          <BrowserRouter>
            {remoteApps.map(app => (
              <Link key={app.appName + app.moduleToImport} to={app.localRoute} className='bg-green-600 px-4 py-2 rounded text-white mr-4'>
                load {app.appName}
              </Link>
            ))}
            <Routes>
              <Route path='/test/*' element={<div>test route</div>} />
              <Route path='/:remoteApp/*' element={<RemoteApp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
