<template>
  <div id="app">
      <header>
        <header-produtos :titulo="routeTitle" @sair="sair" :usuarioLogado="usuarioLogado"></header-produtos>
        <navbar-produtos></navbar-produtos>
      </header>
      <main-produtos> 
      <!-- <div class="container-carregamento">
        <div class="modal-carregamento">
          <div class="conteudo-carregamento">
            <span>Carregando informações...</span>
          </div>
        </div>
      </div>                -->
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

import { routes } from './routes';
import firebase from 'firebase';

export default {
  components: {
    'header-produtos': Header,
    'navbar-produtos': Navbar,
    'main-produtos': Main,
    'footer-produtos': Footer
  },
  created() {
    
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
      firebase.auth().signOut().then(() => {
        this.$router.replace('login');
        this.$store.commit('usuarioLogado', false);
      })
    }
  }
}
</script>

<style lang="scss">
.container-carregamento {
  content: '';
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  .modal-carregamento {
    display: flex;
    justify-content: center;
    .conteudo-carregamento {
      border-radius: 7px;
      background: white;
      padding: 15px;
      color: black;
      width: 15vw;
      text-align: center;
    }
  }
}
</style>
>


</style>
