<template>
  <div id="app">
      <header-produtos></header-produtos>
      <main-produtos>
          <router-view></router-view>
      </main-produtos>
      <footer-produtos></footer-produtos>
  </div>
</template>

<script>
import Header from './components/shared/header/Header.vue'
import Footer from './components/shared/footer/Footer.vue'
import Main from './components/shared/main/Main.vue'

export default {
  components: {
    'header-produtos': Header,
    'main-produtos': Main,
    'footer-produtos': Footer
  }
}
</script>

<style>

</style>
