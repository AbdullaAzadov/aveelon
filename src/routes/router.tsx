/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '@layouts/AppLayout';
import { RouteNames } from './RouteNames';
import { MainPage } from '@pages/MainPage/MainPage';
import { ProjectPage } from '@pages/ProjectPage/ProjectPage';

const ServicesPage = lazy(() => import('@pages/ServicesPage/ServicesPage'));
const MarketingPage = lazy(() => import('@pages/MarketingPage/MarketingPage'));
const PortfolioPage = lazy(() => import('@pages/PortfolioPage/PortfolioPage'));
const OfferPage = lazy(() => import('@pages/OfferPage'));
const PolicyPage = lazy(() => import('@pages/PolicyPage'));

const router = createBrowserRouter([
  {
    path: '/aveelon-showcase',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: RouteNames.SERVICES,
        element: <ServicesPage />,
      },
      {
        path: RouteNames.MARKETING,
        element: <MarketingPage />,
      },
      {
        path: RouteNames.PORTFOLIO,
        element: <PortfolioPage />,
      },
      {
        path: `${RouteNames.PROJECT}:category/:id`,
        element: <ProjectPage />,
      },
      {
        path: RouteNames.PUBLIC_OFFER,
        element: <OfferPage />,
      },
      {
        path: RouteNames.PRIVACY_POLICY,
        element: <PolicyPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/aveelon-showcase' />,
  },
]);

export default router;
