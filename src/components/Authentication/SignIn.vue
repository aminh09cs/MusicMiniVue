<script setup>
import FormSignInVue from './FormSignIn.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const gotoRegister = () => {
  router.push({ name: "register" });
}
</script>
<template>
  <div class="signin">
    <div class="signin-top">
      <div class="btn-back">
        <router-link :to="{ name: 'started' }"><img src="../../assets/Vector.png" alt=""></router-link>
      </div>
      <img src="../../assets/logo-spotify.svg" alt="logo-spotify">
    </div>
    <div class="signin-content">
      <FormSignInVue />
    </div>
    <div class="signin-footer">
      <figure class="signin-footer-logo">
        <img src="../../assets/google.png" alt="google-img">
        <img src="../../assets/apple.png" alt="apple-img">
      </figure>
      <div class="signin-footer-tag">
        <p>Not A Member ? <span @click="gotoRegister">Register Now</span></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.signin {
  width: 390px;
  height: 844px;
  background-color: #1C1B1B;
  background-repeat: no-repeat;

  &-top {
    text-align: center;
    padding: 30px;
    display: flex;
    align-items: center;
    gap: 86px;
    margin-bottom: 80px;

    >img {
      width: 108px;
      height: 33px;
    }

    .btn-back {
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