const routes = [
  {
    path: '/layout',
    name: 'HelloWorld',
    component: () => import(/* webpackChunkName: "app2home" */ './HelloWorld.vue')
  },
  // {
  //   path: '/app2/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "app2about" */ '../views/About.vue')
  // }
]

export default routes