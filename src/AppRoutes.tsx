import { Outlet, RouteObject, useRoutes } from 'react-router-dom';

import { AppContainer } from '@/appContainer';
import { FirstRoute } from '@/pages/FirstRoute.page';
import { SecondRoute } from '@/pages/SecondRoute.page';

function Layout() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}

export const AppRoutes = () => {
  const routes: RouteObject[] = [
    { path: '/first', element: <Layout />, children: [{ path: '', element: <FirstRoute /> }] },
    { path: '/second', element: <Layout />, children: [{ path: '', element: <SecondRoute /> }] },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
