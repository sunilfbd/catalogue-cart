<template>
    <div id="app" class="vu-app-wrapper">
      <Header />
      <CartContent />
      <Footer />
  </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from'../components/Footer.vue'
    import CartContent  from '../components/CartContent'

    export default {
        name: 'cart',
        components: {
            Header,
            Footer,
            CartContent
        }
    }
</script>