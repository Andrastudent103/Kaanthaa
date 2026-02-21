import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import useUserStore from './store/userStore';

function App() {
  const { fetchUser } = useUserStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
