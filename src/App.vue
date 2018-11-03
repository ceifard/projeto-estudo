<template>
  <div id="app">
      <header>
        <header-produtos></header-produtos>
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

export default {
  components: {
    'header-produtos': Header,
    'navbar-produtos': Navbar,
    'main-produtos': Main,
    'footer-produtos': Footer
  }
}
</script>

<style>

</style>
