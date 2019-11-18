<template>
    <div class="vu-component-wrapper vu-wl-content">
        <h1>{{ $route.meta.title }}</h1>
        <p>{{ $route.meta.description }}</p>
        <table class="vu-table">
            <tbody>
                <tr class="vu-table-row">
                    <td class="vu-table-col vu-table-col-cart">
                        <button class="vu-wl-cta-moveToCart">Move to Cart</button>
                    </td>
                    <td class="vu-table-col vu-table-col-img">
                        <picture class="vu-wl-item-picture">
                            <a href="#">
                                <img src="../../src/assets/skateboarding.jpg" class="vu-wl-item-img" />
                            </a>
                        </picture>
                    </td>
                    <td class="vu-table-col vu-table-col-detail">
                        <h3 class="vu-wl-item-heading">lorem ipsum dolor de amet</h3>
                        <p class="vu-deal-detail-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga molestias rem. Necessitatibus, corporis voluptatibus.</p>
                        
                    </td>
                    <td class="vu-table-col vu-table-col-price">
                        <span class="vu-wl-item-price">₹ 10000</span>
                    </td>
                    <td class="vu-table-col vu-table-col-remove">
                        <button class="vu-wl-cta-delete">
                            <span class="visually-hidden">Remove from Wishlist</span>
                        </button>
                    </td>
                </tr>
                <tr class="vu-table-row">
                    <td class="vu-table-col vu-table-col-cart">
                        <button class="vu-wl-cta-moveToCart">Move to Cart</button>
                    </td>
                    <td class="vu-table-col vu-table-col-img">
                        <picture class="vu-wl-item-picture">
                            <a href="#">
                                <img src="../../src/assets/skateboarding.jpg" class="vu-wl-item-img" />
                            </a>
                        </picture>
                    </td>
                    <td class="vu-table-col vu-table-col-detail">
                        <h3 class="vu-wl-item-heading">lorem ipsum dolor de amet</h3>
                        <p class="vu-deal-detail-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga molestias rem. Necessitatibus, corporis voluptatibus.</p>
                        
                    </td>
                    <td class="vu-table-col vu-table-col-price">
                        <span class="vu-wl-item-price">₹ 10000</span>
                    </td>
                    <td class="vu-table-col vu-table-col-remove">
                        <button class="vu-wl-cta-delete">
                            <span class="visually-hidden">Remove from Wishlist</span>
                        </button>
                    </td>
                </tr>
                <tr class="vu-table-row">
                    <td class="vu-table-col vu-table-col-cart">
                        <button class="vu-wl-cta-moveToCart">Move to Cart</button>
                    </td>
                    <td class="vu-table-col vu-table-col-img">
                        <picture class="vu-wl-item-picture">
                            <a href="#">
                                <img src="../../src/assets/skateboarding.jpg" class="vu-wl-item-img" />
                            </a>
                        </picture>
                    </td>
                    <td class="vu-table-col vu-table-col-detail">
                        <h3 class="vu-wl-item-heading">lorem ipsum dolor de amet</h3>
                        <p class="vu-deal-detail-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fuga molestias rem. Necessitatibus, corporis voluptatibus.</p>
                        
                    </td>
                    <td class="vu-table-col vu-table-col-price">
                        <span class="vu-wl-item-price">₹ 10000</span>
                    </td>
                    <td class="vu-table-col vu-table-col-remove">
                        <button class="vu-wl-cta-delete">
                            <span class="visually-hidden">Remove from Wishlist</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'WishlistContent'
}
</script>

<style lang="scss" scoped>
    @import './src/assets/styles/components/wishlist.scss';
</style>