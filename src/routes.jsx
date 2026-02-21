import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Translator from './pages/Translator';
import Report from './pages/Report';
import History from './pages/History';
import Templates from './pages/Templates';
import Explore from './pages/Explore';
import ExploreDetail from './pages/ExploreDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'translate', element: <Translator /> },
            { path: 'report', element: <Report /> },
            { path: 'history', element: <History /> },
            { path: 'templates', element: <Templates /> },
            { path: 'explore', element: <Explore /> },
            { path: 'explore/:id', element: <ExploreDetail /> }
        ],
    },
]);

export default router;
