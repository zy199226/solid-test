import { lazy } from 'solid-js';

// doc: https://docs.solidjs.com/solid-router/getting-started/installation-and-setup
// https://solid.yayujs.com/solid-router/getting-started/installation-and-setup
export const routes = [
  {
    path: '*',
    component: lazy(() => import('./pages/404.tsx')),
  },
];
