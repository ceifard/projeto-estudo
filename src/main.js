import Vue from 'vue'
import App from './App.vue'

// Relativo ao Firebase
import firebase from 'firebase';

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
Vue.component('font-awesome-icon', FontAwesomeIcon);

var config = {
  apiKey: "AIzaSyDX8OWYaDP3s-5MfCSGNBOX4bzjrXS3RB4",
  authDomain: "projeto-estudo-86170.firebaseapp.com",
  databaseURL: "https://projeto-estudo-86170.firebaseio.com",
  projectId: "projeto-estudo-86170",
  storageBucket: "projeto-estudo-86170.appspot.com",
  messagingSenderId: "610992691384"
};
firebase.initializeApp(config);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
