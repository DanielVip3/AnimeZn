<template>
  <v-app color="secondary">

    <!-- Highest element -->
    <div style="visibility: hidden;" id="top-page"></div>

    <!-- Navbar -->
    <Navbar></Navbar>

    <!-- Content -->
    <router-view color="secondary"></router-view>

    <!-- Footer -->
    <Footer></Footer>
  </v-app>
</template>


<script>
import Stickyfill from 'stickyfilljs';
import cssVars from 'css-vars-ponyfill';
import Navbar from './components/general/Navbar';
import Footer from './components/general/Footer';

export default {
  name: 'App',
  components: {
      Navbar,
      Footer,
  },
  mounted() {
    /* Applica polyfill sticky */
    let elements = document.querySelectorAll('.sticky');
    Stickyfill.add(elements);

    /* Applica polyfill variabili CSS */
    cssVars({});
  }
}
</script>


<style>
  html {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #app {
    background-color: var(--v-secondary-base);
  }

  a {
      color: var(--v-accent-base)!important;
  }

  .application--wrap {
    width: 100%;
  }

  .v-divider {
    margin-left: 0!important;
    margin-right: 0!important;
    max-width: 100%!important;
  }
</style>