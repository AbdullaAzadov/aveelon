import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '@layouts/AppLayout';
import { RouteNames } from './RouteNames';
import * as Pages from '@pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Pages.MainPage />,
      },
      {
        path: RouteNames.SERVICES,
        element: <Pages.ServicesPage />,
      },
      {
        path: RouteNames.MARKETING,
        element: <Pages.MarketingPage />,
      },
      {
        path: RouteNames.PORTFOLIO,
        element: <Pages.PortfolioPage />,
      },
      {
        path: `${RouteNames.PROJECT}:category/:id`,
        element: <Pages.ProjectPage />,
      },
      {
        path: RouteNames.PUBLIC_OFFER,
        element: <h1>Public Offer</h1>,
      },
      {
        path: RouteNames.PRIVACY_POLICY,
        element: <h1>Privacy Policy</h1>,
      },
      {
        path: '*',
        element: <Navigate to='/' />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404</h1>,
  },
]);

export default router;
