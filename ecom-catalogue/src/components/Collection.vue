<template>
    <div class="vu-component-wrapper vu-collection-list">
        <CollectionCard :deal="deal" v-for="deal in dealsList" :key="deal.id" />
    </div>
</template>

<script>
    import CollectionCard from './CollectionCard.vue';

    export default {
        name: 'Collection',
        components: {
            CollectionCard
        },
        computed: {
            dealsList() {
                return this.$store.state.dealList
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/components/collection.scss';
</style>