import { Routes, Route, Link } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <div className='bg-pink-300'>
      <div className='text-3xl text-pink-900'>shell App</div>
      <Link to='route1' className='text-blue-600 mr-4'>
        link 1
      </Link>
      <Link to='route2' className='text-blue-600'>
        link 2
      </Link>
      <div className='my-10 text-green-700' style={{ color: 'red' }}>
        <Routes>
          {/* TODO: Check with images and other assets */}
          <Route index element={<div>App 1 Home</div>} />
          <Route path='/route1' element={<div>Shell App Route 1</div>} />
          <Route path='/route2' element={<div>Shell App Route 2</div>} />
        </Routes>
      </div>
    </div>
  );
}
