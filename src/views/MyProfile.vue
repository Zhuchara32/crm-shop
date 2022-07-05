<template>
  <div class="profile" :class="{full: !isOpen}">
    <h2 class="profile-heading">Профиль</h2>
    <form class="profile-form">
      <label for="name">Введите новое имя: </label>
      <input class="profile-form__input" type="text">
      <button class="profile-form__btn" type="submit">Сохранить изменения</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MyProfile',
  computed: {
    ...mapGetters(['isOpen'])
  }
}
</script>

<style lang="scss">
  .profile {
    width: 80vw;
    text-align: center;
    margin-left: 20vw;

    &-heading {
      margin: 10px auto;
    }

    &-form {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__input {
        width: 300px;
        font-size: 13px;
        padding: 6px 0 4px 10px;
        border: 1px solid #cecece;
        background: #F6F6f6;
        border-radius: 8px;
        margin-bottom: 10px;
      }

      &__btn {
        border: none;
        border-radius: 15px;
        width: 150px;
        height: 30px;
        background: #000080;
        color: #ffffff;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>
