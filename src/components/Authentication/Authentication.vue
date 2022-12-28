<script setup>
import Button from '../../helper/Button.vue';
import { useRouter } from 'vue-router';import { onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { storeToRefs } from 'pinia';

//ref
const theme = ref({});
//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);

const router = useRouter()

//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}
const gotoRegister = () =>{
  router.push({name: 'register'})
}
const gotoSignIn = () =>{
  router.push({name: 'sign-in'})
}
onMounted(() => {
  checkTheme();
})
</script>
<template>
  <section class="auth">
    <div class="auth-top">
      <div class="btn-back">
        <router-link :to="{ name: 'started' }"><img :src="`${theme.vector}`" alt=""/></router-link>
      </div>
    </div>
    <div class="auth-content">
      <div class="auth-content-top">
        <img src="../../assets/logo-spotify.svg" alt="logo-spotify" />
        <h1>Enjoy listening to music</h1>
        <p>Spotify is a proprietary Swedish audio streaming and media services provider</p>
      </div>
      <div class="auth-content-bottom">

        <div class="re-sign-btn">
          <Button
            fontSize="20px"
            width="147px"
            height="73px"
            name="Register"
            @click="gotoRegister" 
          >
          </Button>
          <Button
            fontSize="20px"
            width="147px"
            height="73px"
            name="Sign In"
            :color= theme.authColorSignIn
            @click="gotoSignIn" 
          >
          </Button>
        </div>
      </div>
    </div>
    <img src="../../assets/15mag-billie-03-master675-v3 1.png" alt="15-mag" class="img-foot" style="width: 100%" />
  </section>
</template>
<style scoped lang="scss">
@import "../../helper/mixin";

.auth {
  position: relative;

  height: 844px;
  background-color: v-bind('theme.backgroundAuth');
  background-repeat: no-repeat;

  &-top {
    .btn-back {
      position: absolute;
      top: 30px;
      left: 30px;
      @include button-back();
      background: v-bind('theme.backgroundBtnPlay');
    }
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 306px;
    text-align: center;

    z-index: 10;

    &-top {
      margin-bottom: 55px;

      img {
        margin-bottom: 55px;
      }

      h1 {
        @include styleText(v-bind('theme.authColorSlogan'), 26px, 700);
        line-height: 35px;
        text-transform: capitalize;
        margin-bottom: 21px;
      }

      p {
        @include styleText(v-bind('theme.authColorIntro'), 17px, 400);
        line-height: 23px;
      }
    }

    &-bottom {
      .re-sign-btn {
        display: flex;
        justify-content: space-between;

        button {
          @include button(147px, 73px, 26px, 19px);

          a {
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .img-foot {
    position: absolute;
    bottom: 0;
  }
}
</style>

