import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const serverRoutes = (state) =>{

  return[
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
}
  
  export default serverRoutes;