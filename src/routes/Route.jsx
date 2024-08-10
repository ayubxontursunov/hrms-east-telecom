import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Dashboard from '../components/dashboard/Dashboard';
import AllEmployees from '../components/all-employees/AllEmployees';
import NoPage from '../components/nopage/NoPage';
import Password from '../pages/password/Password';
import Announcement from '../components/announcement/Announcement';
import Training from '../components/training/Training';
import Document from '../components/document/Document';
import Leaves from '../components/leaves/Leaves';
import Profile from '../components/profile/Profile';
import NotificationComponent from '../components/notification-component/NotificationComponent';
import ClickLogo from '../components/clicklogocomp/ClickLogo';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,    
  },
  {
    path: '/login',
    element: <Login/>,    
  },
  {
    path:'/password-reset',
    element:<Password/>,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <NoPage />,
    children: [
      // {
      //   index:true,
      //   element: <Dashboard />,
      // },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'all-employees',
        element: <AllEmployees />
      },
      {
        path: 'announcement',
        element: <Announcement />,
      },
      {
        path: 'trainings',
        element: <Training />,
      },
      {
        path: 'document',
        element: <Document />,
      },
      {
        path: 'leaves',
        element: <Leaves />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'notification-alert',
        element: <NotificationComponent />,
      },
      {
        path: 'about-hrms',
        element: <ClickLogo />,
      },
    ],
  },
  {
    path: '*',
    element: <NoPage />,
  },
]);

export default router;