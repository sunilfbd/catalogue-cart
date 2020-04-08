<template>
        <header class="vu-component-wrapper vu-header">
            <picture class="vu-logo left-aligned">
                <a href="/">
                    <img class="vu-logo-img" src="../../src/assets/logo.png" alt="AKQA logo" />
                </a>
            </picture>
            <ul class="vu-nav-list right-aligned">
                <li class="vu-nav-list-item">
                    <!-- <a href="/wishlist/" >
                    </a> -->
                    <router-link class="vu-nav-list-item-link vu-icn vu-wishlist-icn" to="/wishlist">
                        <span class="vu-count vu-wishlist-count">{{ myWishlist }}</span>
                        <span class="visually-hidden">Wishlist</span>
                    </router-link>
                </li>

                <li class="vu-nav-list-item">
                    <router-link class="vu-nav-list-item-link vu-icn vu-bag-icn" to="/cart">
                        <span class="vu-count vu-bag-count">{{ productInBag }}</span>
                        <span class="visually-hidden">Shopping Bag</span>
                    </router-link>
                </li>

            </ul>
        </header>
</template>

<script>
    export default {
        name: 'Header',
        computed: {
            productInBag() {
                return this.$store.state.productInBag.length
            },
            myWishlist() {
                return this.$store.state.myWishlist.length
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/components/header.scss';
</style>