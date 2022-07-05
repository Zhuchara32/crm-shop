<template>
  <div class="orders" :class="{full: !isOpen}">
    <h2 class="orders-heading">Новые заказы</h2>
    <ul class="orders-list">
      <ListOrders />
    </ul>
  </div>
</template>

<script>
import ListOrders from '../components/ListOrders.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'MyOrders',
  components: {
    ListOrders
  },
  computed: {
    ...mapGetters(['isOpen'])
  }
}
</script>

<style lang="scss">
  .orders {
    width: 80vw;
    text-align: center;
    margin-left: 20vw;

    &-heading {
      margin: 10px auto;
    }

    &-list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
    }
  }
</style>
