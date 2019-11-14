<template>
    <div class="vu-card-item">
            <a href="#detail">
                <img src="../../src/assets/skateboarding.jpg" class="vu-card-img" alt="card img" />
            </a>
            <h3 class="vue-card-title">{{ deal.title }}</h3>
            <div class="vu-card-detail-wrapper">
                <span class="vu-card-copy-text">&#8377; {{ deal.price }}</span>
                <button @click="addTowihslist" class="vu-cta vu-icn vu-wishlist-icn">
                    <span class="visually-hidden">Wishlist</span>
                </button>
                <a href="#" @click="addDeals" class="vu-card-more-link">Buy Now</a>
            </div>
    </div>
</template>

<script>

    export default {
        name: 'CollectionCard',
        props: ['deal'],
        methods: {
            addDeals(e) {
                e.preventDefault();
                this.$store.commit('updatedBagCount', {
                    productKey: this.deal.key
                });
            },

            addTowihslist(e) {
                e.target.classList.toggle('active');
                this.$store.commit('updateWishlist',{
                    productKey: this.deal.key
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/components/collectionCard.scss';
</style>