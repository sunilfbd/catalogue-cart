<template>
  <div id="app" class="vu-app-wrapper">
      <Header />
      <div class="vu-component-wrapper vu-wishlist">
        <h1>This is wishlist page</h1>
      </div>
      <Footer />
  </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'wishlist',
        components: {
            Header,
            Footer
        }
    }
</script>