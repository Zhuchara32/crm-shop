<template>
  <div class="empty-layout">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import messages from '@/utils/messages'

export default {
  computed: {
    ...mapGetters(['error']),
    errorLog () {
      return this.error
    }
  },
  watch: {
    error (fbError) {
      console.log(fbError)
      this.$error(messages[fbError.code] || 'что-то пошло не так')
    }
  }
}
</script>

<style lang="scss">
  .empty-layout {
    background: #FFD700;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
