import { createBrowserRouter, redirect } from 'react-router-dom';

import { StoreKey } from '@/constants';
import Login from '@/pages/login';
import Chat from '@/pages/chat';
import User from '@/pages/user';
import Billing from '@/pages/billing';
import Salesman from '@/pages/salesman';
import Layout from '@/layout/index';
import ErrorPage from '@/pages/error-page';
import toast from 'react-hot-toast';
import Monkeyhome from '@/pages/monkeyhome';

const authRedirect = () => {
  if (!localStorage.getItem(StoreKey.AccessToken)) {
    toast.error('请登录');
    return redirect('/login');
  }
  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'chat',
        element: <Chat />,
        loader: authRedirect,
      },
      {
        path: 'user',
        element: <User />,
        loader: authRedirect,
      },
      {
        path: 'billing',
        element: <Billing />,
        loader: authRedirect,
      },
      {
        path: 'salesman',
        element: <Salesman />,
        loader: authRedirect,
      },
      {
        path: 'monkeyhome',
        element: <Monkeyhome />,
        index: true,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
