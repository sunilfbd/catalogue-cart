<template>
  <div id="app" class="vu-app-wrapper">
      <Header />
      <Collection />
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue';
import Collection from '../components/Collection.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'home',
  components: {
    Header,
    Footer,
    Collection
  }
}
</script>
