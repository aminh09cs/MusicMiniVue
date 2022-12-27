<script setup>
import FormRegisterVue from './FormRegister.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const gotoRegister = () => {
  router.push({ name: "sign-in" });
}
</script>

<template>
  <div class="register">
    <div class="register-top">
      <div class="btn-back">
        <router-link :to="{ name: 'started' }"><img src="../../assets/Vector.png" alt=""></router-link>
      </div>
      <img src="../../assets/logo-spotify.svg" alt="logo-spotify">
    </div>
    <div class="register-content">
      <FormRegisterVue />
    </div>
    <div class="register-footer">
      <figure class="register-footer-logo">
        <img src="../../assets/google.png" alt="google-img">
        <img src="../../assets/apple.png" alt="apple-img">
      </figure>
      <div class="register-footer-tag">
        <p>Do You Have An Account ? <span @click="gotoRegister">Sign In</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.register {
  height: 844px;
  background-color: #1C1B1B;
  background-repeat: no-repeat;

  &-top {
    position: relative;
    text-align: center;
    padding: 30px;
    align-items: center;
    margin-bottom: 47px;

    >img {
      width: 108px;
      height: 33px;
    }

    .btn-back {
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translate(0, -50%);
      @include button-back();
    }
  }

  &-content {
    max-width: 325px;
    margin: 0 auto;
  }

  &-footer {
    margin: 44px;

    &-logo {
      margin: 0 auto;
      width: 200px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      img {
        height: 36px;
        widows: 36px;
        cursor: pointer;
      }

      margin-bottom: 30px;
    }

    &-tag {
      @include styleText(#DBDBDB, 14px, 700);
      line-height: 19px;
      text-align: center;

      span {
        color: #288CE9;
        cursor: pointer;
      }
    }

  }
}
</style>