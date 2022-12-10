import { useParams } from 'react-router-dom';

// @ts-ignore
import App1 from 'app1/AppRoutes';
// @ts-ignore
import App2 from 'app2/AppRoutes';

export default function RemoteAppContainer() {
  const { remoteApp } = useParams();

  if (remoteApp === 'app1') return <App1 />;
  else if (remoteApp === 'app2') return <App2 />;
  else return <div>App Not found</div>;
}
