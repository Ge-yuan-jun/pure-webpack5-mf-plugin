import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './routes'
import routes1 from 'home/Routes1'

Vue.use(VueRouter)

// console.log('router: ', {
//   ...routes1
// })

console.log('routes.concat(routes1): ', routes.concat(routes1))

const router = new VueRouter({
  routes: routes.concat(routes1)
})

// import('home/Routes1').then((res) => {
//   console.log('res: ', res)
//   router.addRoute(res)
// })

Vue.component("content-element", () => import("home/Content"));
Vue.component("button-element", () => import("home/Button"));

export default new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
