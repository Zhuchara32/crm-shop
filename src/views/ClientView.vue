<template>
  <div class="client" :class="{full: !isOpen}">
    <h1>Добро пожаловать!</h1>
    <ul class="client-list">
      <ClientList
        v-for="prod in arrForUsers"
        :key="prod.uidProd"
        :prod="prod"
      />
    </ul>
  </div>
</template>

<script>
import ClientList from '../components/ClientList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ClientView',
  components: {
    ClientList
  },
  computed: {
    ...mapGetters(['isOpen', 'arrForUsers'])
  },
  async mounted () {
    await this.fetchProdForUsers()
  },
  methods: {
    ...mapActions(['fetchProdForUsers'])
  }
}
</script>

<style lang="scss">
  .client {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // text-align: center;
    text-align: center;
    width: 80vw;
    margin-left: 20vw;

    &-list {
      list-style-type: none;
    }
  }

  .full {
    width: 100vw !important;
    margin: 0 !important;
  }
</style>
