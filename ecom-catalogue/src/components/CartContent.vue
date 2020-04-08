<template>
    <div class="vu-component-wrapper vu-cart">
        <div class="vu-page-header">
            <h1 class="vu-page-heading">{{ $route.meta.title }}</h1>
            <p class="vu-page-desciption">{{ $route.meta.description }}</p>
        </div>

        <table class="vu-cart-table">
            <thead>
                <tr class="vu-cart-table-header">
                    <th class="vu-col-prod-name">Product Name</th>
                    <th class="vu-col-prod-price">Product Price</th>
                    <th class="vu-col-prod-quantity">Product Quantity</th>
                    <th class="vu-col-prod-item-total">Item total</th>
                    <th class="vu-col-prod-remove"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bagItem in itemInBag" :key="bagItem.id">
                    <td class="vu-col-prod-name">{{ bagItem.title}}</td>
                    <td class="vu-col-prod-price">₹ {{ bagItem.price}}</td>
                    <td class="vu-col-prod-quantity">
                        <input type="text" value="1" class="vu-text-box vu-prod-quant" name="prod-quant" id="prod-quant" />
                    </td>
                    <td class="vu-col-prod-item-total">₹ {{bagItem.price}}</td>
                    <td class="vu-col-prod-remove">
                        <button class="vu-cta-remove">
                            <span class="visually-hidden">
                                Remove
                            </span>
                        </button>
                    </td>
                </tr>
                <!-- <tr>
                    <td class="vu-col-prod-name">Lorem ipsum dolor de amet</td>
                    <td class="vu-col-prod-price">1000</td>
                    <td class="vu-col-prod-quantity">
                        <input type="text" value="1" class="vu-text-box vu-prod-quant" name="prod-quant" id="prod-quant" />
                    </td>
                    <td class="vu-col-prod-item-total">1000</td>
                    <td class="vu-col-prod-remove">
                        <button class="vu-cta-remove">
                            <span class="visually-hidden">
                                Remove
                            </span>
                        </button>
                    </td>
                </tr> -->
            </tbody>
            <tfoot class="vu-total-row">
                <tr>
                    <td colspan="3" class="vu-col-total-label">Total Tax (10%)</td>
                    <td colspan="2" class="vu-col-total-value">10</td>
                </tr>
                <tr>
                    <td colspan="3" class="vu-col-total-label">Total Amount (Including tax)</td>
                    <td colspan="2" class="vu-col-total-value">1000</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'CartContent',
        computed: {
            itemInBag() {
                return this.$store.state.productInBag;
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import './src/assets/styles/components/cartTable.scss';
</style>