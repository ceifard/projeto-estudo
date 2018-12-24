import Vue from 'vue'
import App from './App.vue'

//Relativos ao Router
import VueRouter from 'vue-router';
import { routes } from './routes';

//Relativos ao flux, com VueX
import store from './store' 

// Relativo à autenticação com FireBase
const fb = require('./firebaseConfig.js')

// Relativo á validação de forms com VeeValidate
import VeeValidate from 'vee-validate'
import msg from './pt_BR'; //tradução pra portugues

//Relativos aos ícones com FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faWindowClose, faSync  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

//configuração do fontawesome
library.add(faUser, faWindowClose, faSync);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//configuração do VeeValidate
Vue.use(VeeValidate, {

  fieldsBagName: 'formFields',
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }

});

Vue.use(VueRouter);
export const router = new VueRouter({
  routes
});

//garante que a aplicação só será renderizada após o firebase checar a autenticação do usuário
let app
fb.auth.onAuthStateChanged(user => {
  user ? store.commit('usuarioLogado', true) : store.commit('usuarioLogado', false);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth) //checa se, na rota que estamos sendo direcionados, há o meta "requiresAuth" setado nas rotas de routes.js
  const currentUser = fb.auth.currentUser  //checa se tem usuario logado, se tiver retorna o usuario, se nao tiver retorna null

  if (requiresAuth && !currentUser) {  //se a rota que estamos navegando requer autenticação e nao há usuário logado, redirecionamos para a pagina de login
      next('login') 
  } else if (!requiresAuth && currentUser) {  //se a rota que estamos navegando NÃO requer autenticação (cadastro e login) e há usuário logado, redirecionamos para a pagina de principal
      next('principal');
  } else { //senão, deixamos a navegação prosseguir
      next()
  }

})