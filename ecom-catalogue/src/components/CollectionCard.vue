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
        computed: {
            dealsList() {
                return this.$store.state.dealList
            }
        },

        methods: {
            addDeals(e) {
                e.preventDefault();
                this.$store.commit('updatedBagCount', this.getDealItem(this.deal.key));
            },

            addTowihslist(e) {
                e.target.classList.toggle('active');
                this.$store.commit('updateWishlist', this.getDealItem(this.deal.key));
            },

            getDealItem(itemID) {
                var dealsItem = this.dealsList.find((item) => {
                    return item.key == itemID;
                });
                return dealsItem;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/components/collectionCard.scss';
</style>