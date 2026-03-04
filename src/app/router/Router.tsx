import { routes } from '@/common/enums/routes';

import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import CartsList from '@pages/CartsList';

const Cart = lazy(() => import('@pages/Cart'));

const publicRoutes: RouteObject[] = [
  { path: '*', element: <Navigate to={routes.CARTS} /> },
  { path: routes.CARTS, element: <CartsList /> },
  { path: `${routes.CARTS}/:cartId`, element: <Cart /> },
];

export const Router = () => {
  return <RouterProvider router={createBrowserRouter(publicRoutes, { basename: '/headliner' })} />;
};
