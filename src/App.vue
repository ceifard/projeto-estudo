<template>
  <div id="app">
      <header>
        <header-produtos :titulo="routeTitle" @sair="sair" :usuarioLogado="usuarioLogado"></header-produtos>
        <navbar-produtos></navbar-produtos>
      </header>
      <main-produtos> 
          <modal-carregamento :carregando="$store.getters.carregando"></modal-carregamento>             
          <router-view></router-view>
      </main-produtos>        
      <!-- <footer>
        <footer-produtos></footer-produtos>
      </footer> -->
  </div>
</template>

<script>
import Header from './components/shared/header/Header.vue'
import Navbar from './components/shared/navbar/Navbar.vue'
import Footer from './components/shared/footer/Footer.vue'
import Main from './components/shared/main/Main.vue'
import ModalCarregamento from './components/shared/modal-carregamento/ModalCarregamento.vue'

import { routes } from './routes';
import firebase from 'firebase';

export default {
  components: {
    'header-produtos': Header,
    'navbar-produtos': Navbar,
    'main-produtos': Main,
    'footer-produtos': Footer,
    'modal-carregamento': ModalCarregamento
  },
  created() {
    //console.log(firebase.firestore().collection('produtos').add({nomeProd:'asdsad', precoProd: 'bb', categoriaProd: 'cc'}));
  },
  computed: {
    usuarioLogado() {
      return this.$store.getters.usuarioLogado;
    },
    routeTitle() {
      let path = this.$route.path === "/" ? "" : this.$route.path;
      let route = routes.find( route => route.path == path )
      return route.title;
    }
  },

  methods: {
    sair() {
      this.$store.commit('carregando', true);
      firebase.auth().signOut().then(() => {
        this.$store.commit('carregando', false);
        this.$router.replace('login');
        this.$store.commit('usuarioLogado', false);
      })
    }
  }
}
</script>

