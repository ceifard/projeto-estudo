import Vue from 'vue'
import App from './App.vue'

//Relativos ao Router
import VueRouter from 'vue-router';
import { routes } from './routes';

//Relativos ao VueX
import store from './store' 

//Relativos ao FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter);
export const router = new VueRouter({
  routes
});

library.add(faUser);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
