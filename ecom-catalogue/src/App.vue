<template>
  <div id="app" class="vu-app-wrapper">
    <Header />
    <Collection />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Collection from './components/Collection.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Collection
  },
}
</script>

<style lang="scss">
  @import '@/assets/styles/main.scss';
</style>

