export default [
  { path: '/', component: '@/pages/index' },
  {
    path: '/lago',
    component: '@/pages/lago/lago',
    routes: [
      {
        path: '/logo/detail',
        component: '@/pages/',
      },
    ],
  },
];
