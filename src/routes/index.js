/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */
// Containers
const TheContainer = () => import('@/containers/TheContainer');

// Views
const Overview = () => import('@/pages/Overview/Index.vue');
const Replay = () => import('@/pages/Replay/Index.vue');
const Positions = () => import('@/pages/Positions/Index.vue');
const Grenades = () => import('@/pages/Grenades/Index.vue');
const Kills = () => import('@/pages/Kills/Index.vue');
const Strategy = () => import('@/pages/Strategy/Index.vue');
const Account = () => import('@/pages/Account/Index.vue');
const Login = () => import('@/pages/Login/Index.vue');
const Register = () => import('@/pages/Register/Index.vue');

export default [
  {
    path: '/',
    redirect: '/overview',
    name: 'Overview',
    component: TheContainer,
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
      },
      {
        path: 'replay',
        name: '2D replay',
        component: Replay,
      },
      {
        path: 'positions',
        name: 'Positions',
        component: Positions,
      },
      {
        path: 'grenades',
        name: 'Grenades',
        component: Grenades,
      },
      {
        path: 'kills',
        name: 'Kills',
        component: Kills,
      },
      {
        path: 'strategy',
        name: 'Strategy',
        component: Strategy,
      },
      {
        path: '/account',
        name: 'Account',
        component: Account,
        // If the user needs to be authenticated to view this page.
        meta: {
          // auth: true,
        },
      },
      // Login
      {
        path: '/login',
        name: 'login.index',
        component: Login,
        // If the user needs to be a guest to view this page.
        meta: {
          // guest: true,
        },
      },
      // Register
      {
        path: '/register',
        name: 'register.index',
        component: Register,
        // If the user needs to be a guest to view this page.
        meta: {
          // guest: true,
        },
      },
    ],
  },
];
