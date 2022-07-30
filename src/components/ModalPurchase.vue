<template>
  <div class="modal">
    <form
      class="modal-app"
    >
      <label
        for="nameBuyer"
        class="modal-name"
      >
        Укажите имя покупателя
      </label>
      <input
        type="text"
        id="nameBuyer"
        v-model="name"
        class="modal-input"
      >
      <label
        for="addressBuyer"
        class="modal-name"
      >
        Укажите адрес доставки
      </label>
      <input
        type="text"
        id="addressBuyer"
        v-model="address"
        class="modal-input"
      >
      <label
        for="phoneBuyer"
        class="modal-name"
      >
        Укажите номер телефона получателя
      </label>
      <input
        type="tel"
        id="phoneBuyer"
        v-model="phone"
        class="modal-input"
      >
      <div class="modal-container">
        <button
          type="submit"
          class="modal-btn save"
          @click.prevent="addInfoSale(cart)"
        >
          Оформить заказ
        </button>
        <button
          class="modal-btn cancel"
          type="button"
          @click="CHANGE_ActiveModal"
        >
          Отмена
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ModalPurchase',
  data () {
    return {
      name: '',
      address: '',
      phone: ''
    }
  },
  props: {
    cart: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    ...mapActions(['saleProd', 'CHANGE_ActiveModal']),
    addInfoSale (cart) {
      const dataInfo = {
        name: this.name,
        address: this.address,
        phone: this.phone
      }
      this.saleProd({ cart, dataInfo })
      this.clarInfo()
    },
    clarInfo () {
      this.name = ''
      this.address = ''
      this.phone = ''
    }
  }
}
</script>

<style lang="scss">
  .modal {
    position: fixed;
    top: calc(50vh - 200px);
    left: calc(50vw - 250px);
    width: 500px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s ease;
    border-radius: 10px;

    &-app {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    &-name {
      font-size: 18px;
      color: #ffffff;
      margin-bottom: 10px;
    }

    &-input {
      border: none;
      border-radius: 8px;
      height: 25px;
      width: 300px;
      margin-bottom: 20px;
    }

    &-container {
      width: 300px;
      margin-top: 25px;
      display: flex;
      justify-content: space-between;
    }

    &-btn {
      padding:10px;
      border-radius: 10px;
      border: none;
      color: #ffffff;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .save {
    background: #145A32;
  }

  .cancel {
    background: #B2BABB;
  }
</style>
