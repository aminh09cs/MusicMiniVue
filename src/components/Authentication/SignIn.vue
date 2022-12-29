<script setup>
import FormSignInVue from './FormSignIn.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { storeToRefs } from 'pinia';

//ref
const theme = ref({});

//store
const themeStore = useThemeStore();
//router
const router = useRouter();
//methods
const checkTheme = () =>{
    theme.value = themeStore.chooseTheme();
}

onMounted(() => {
  checkTheme();
})
const gotoRegister = () => {
  router.push({ name: "register" });
}
</script>
<template>
  <div class="signin">
    <div class="signin-top">
      <div class="btn-back">
        <router-link :to="{ name: 'started' }"><img :src="`${theme.vector}`" alt=""/></router-link>
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
  height: 844px;
  background: v-bind('theme.backgroundSignIn');
  background-repeat: no-repeat;

  &-top {
    position: relative;
    text-align: center;
    padding: 30px;
    align-items: center;
    margin-bottom: 80px;

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
      background: v-bind('theme.backgroundBtnPlay');
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
      @include styleText(v-bind('theme.signColorSlogan'), 14px, 700);
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