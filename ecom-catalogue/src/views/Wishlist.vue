<template>
  <div id="app" class="vu-app-wrapper">
      <Header />
      <WishlistContent />
      <Footer />
  </div>
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import WishlistContent from  '../components/WishlistContent.vue'

    export default {
        name: 'wishlist',
        components: {
            Header,
            Footer,
            WishlistContent
        }
    }
</script>