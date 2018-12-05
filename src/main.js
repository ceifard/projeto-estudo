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
import { faUser, faWindowClose  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueRouter);
export const router = new VueRouter({
  routes
});

library.add(faUser, faWindowClose);
Vue.component('font-awesome-icon', FontAwesomeIcon);

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyDX8OWYaDP3s-5MfCSGNBOX4bzjrXS3RB4",
  authDomain: "projeto-estudo-86170.firebaseapp.com",
  databaseURL: "https://projeto-estudo-86170.firebaseio.com",
  projectId: "projeto-estudo-86170",
  storageBucket: "projeto-estudo-86170.appspot.com",
  messagingSenderId: "610992691384"
});


Vue.config.productionTip = false

//garante que a aplicação só será renderizada após o firebase checar a autenticação do usuário
firebase.auth().onAuthStateChanged(() => {
  console.log(firebase.auth().currentUser)
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser; //checa se tem usuario logado, se tiver retorna o usuario, se nao tiver retorna null
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth); //checa se, na rota que estamos sendo direcionados, há o meta "requiresAuth" setado nas rotas de routes.js

  if(requiresAuth && !currentUser) next('login'); //se a rota que estamos navegando requer autenticação e nao há usuário logado, redirecionamos para a pagina de login
  else if (!requiresAuth && currentUser) next('principal'); //se a rota que estamos navegando NÃO requer autenticação (cadastro e login) e há usuário logado, redirecionamos para a pagina de principal
  else next(); //senão, deixamos a navegação prosseguir
})