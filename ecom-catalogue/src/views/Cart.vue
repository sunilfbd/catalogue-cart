<template>
    <div id="app" class="vu-app-wrapper">

      <Header />

      <div class="vu-component-wrapper vu-cart">
        <h1>this is shopping bag page</h1>  
      </div>

      <Footer />
  </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from'../components/Footer.vue'

    export default {
        name: 'cart',
        components: {
            Header,
            Footer
        }
    }
</script>