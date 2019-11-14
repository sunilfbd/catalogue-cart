<template>
    <footer class="vu-component-wrapper vu-footer">
        <ul class="vu-footer-list">
            <li class="vu-footer-list-item left-aligned" v-html="copyRightMsg"></li>
            <li class="vu-footer-list-item right-aligned">
                lorem ipsum
            </li>
        </ul>
    </footer>
</template>


<script>
export default {
    name: 'Footer',
    props: {
        copyRightMsg: String
    }
}
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/components/footer.scss';
</style>

