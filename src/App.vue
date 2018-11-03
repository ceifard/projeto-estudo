<template>
  <div id="app">
      <header>
        <header-produtos :titulo="routeTitle"></header-produtos>
        <navbar-produtos></navbar-produtos>
      </header>
      <main-produtos>
          <router-view></router-view>
      </main-produtos>        
      <footer>
        <footer-produtos></footer-produtos>
      </footer>
  </div>
</template>

<script>
import Header from './components/shared/header/Header.vue'
import Navbar from './components/shared/navbar/Navbar.vue'
import Footer from './components/shared/footer/Footer.vue'
import Main from './components/shared/main/Main.vue'

import { routes } from './routes';

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
    routeTitle() {
      let route = routes.find( route => route.path == this.$route.path )
      return route.title;
    }
  }
}
</script>

<style>

</style>
