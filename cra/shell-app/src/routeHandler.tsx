import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function RouteHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return <div>Route Handler</div>;
}
