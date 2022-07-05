<template>
  <div class="sidebar">
    <ul class="sidebar-app" v-show="uid">
      <router-link
        v-for="link in links"
        :key="link.url"
        active-class="active"
        :to="link.url"
        :exact="link.exact"
        class="sidebar-link"
      >
        <li class="sidebar-item">
          <a href="#" class="sidebar-ref">{{ link.title }}</a>
        </li>
      </router-link>
    </ul>

    <form class="sidebar-app" v-show="!uid">
      <div
        class="sidebar-item"
      >
        <label class="sidebar-label" for="typeProd">Тип продукта: </label>
        <select class="sidebar-input" name="typeProd" id="typeProd">
          <option value="" disabled selected></option>
        </select>
      </div>

      <div
        class="sidebar-item"
      >
        <label class="sidebar-label" for="salesman">Продавцы: </label>
        <select class="sidebar-input" name="salesman" id="salesman">
          <option value="" disabled selected></option>
        </select>
      </div>

      <div
        class="sidebar-item"
      >
        <label class="sidebar-label" for="price">Цена: </label>
        <input
          class="sidebar-input"
          type="number"
          placeholder="От"
        >
        <input
          class="sidebar-input"
          type="number"
          placeholder="До"
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MainSidebar',
  data () {
    return {
      links: [
        { title: 'Мои товары', url: '/myProduct', exact: true },
        { title: 'Заказы', url: '/orders' },
        { title: 'Добавить товар', url: '/add' }
      ]
    }
  },
  computed: {
    ...mapGetters(['uid'])
  }
}
</script>

<style lang="scss">
  .sidebar {
    height: calc(100vh - 50px);
    width: calc(20vw - 2px);
    border-right: 2px solid #DCDCDC;
    position: fixed;
    top: 50px;
    left: 0;
    right: calc(20vw - 2px);

    &-link, &-ref {
      text-decoration: none;
      color: #000000;
    }

    &-item {
      width: 100%;
      display: inline-block;
      margin: 10px auto 0;
      border-bottom: 1px solid #DCDCDC;
    }

    &-input {
      width: 150px;
      font-size: 13px;
      padding: 6px 0 4px 10px;
      border: 1px solid #cecece;
      background: #F6F6f6;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    &-label {
      display: block;
      margin-bottom: 5px;
    }
  }

  .active {
    background: #DCDCDC;
    display: block;
    width: calc(20vw - 2px)
  }
</style>
