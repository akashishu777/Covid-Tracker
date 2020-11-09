import { RouteProps } from 'react-router-dom';

import App from './App';
import Dashbaord from './features/Posts/Dashbaord';

 
// interface IRoutes extends RouteProps {
//   path: string | undefined;
//   component: React.ComponentType;
//   exact: boolean;
// }
export const AppRoutes: RouteProps[] = [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path: '/Dashbaord',
    component: Dashbaord,
    exact: true
  }
];
