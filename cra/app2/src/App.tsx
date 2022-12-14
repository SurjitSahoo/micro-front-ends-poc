import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hello from './mf/hello';
import AppRoutes from 'mf/routes';

// @ts-ignore
import { CentralStoreProvider } from 'redux/store';

function App() {
  return (
    <CentralStoreProvider>
      <div className='bg-gray-600 pt-10 text-white min-h-screen'>
        <div className='max-w-6xl text-3xl mx-auto'>
          <div>Name: App2 CRA</div>
          <div>Framework: react</div>
          <div>Language: TypeScript</div>
          <div className='mb-10'>CSS: Tailwind</div>

          <BrowserRouter>
            <Hello />
            <Routes>
              <Route path='/test' element={<div>test route</div>} />
            </Routes>
            <AppRoutes />
          </BrowserRouter>
        </div>
      </div>
    </CentralStoreProvider>
  );
}

export default App;
