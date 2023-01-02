<script setup>
import Button from '../helper/Button.vue';
import StartedMode from './StartedMode.vue';
import { onMounted, ref } from 'vue';
import {useThemeStore} from '../stores/theme'
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

//refs
const mode = ref("started");
const active = ref(true);
const theme = ref({});

//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);

//router
const router = useRouter();

//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}

const onHandleMode = () => {
  mode.value = 'continue';
  active.value = false;

}
const gotoLogin = () => {
  router.push({ name: "login" });
}

const switchThemeDark = ()=>{
  themeStore.setTheme('dark');
  localStorage.setItem("theme", themeStore.theme.defaultTheme.toString());
  checkTheme();
}
const switchThemeLight= ()=>{
  themeStore.setTheme('light');
  localStorage.setItem("theme", themeStore.theme.defaultTheme.toString());
  checkTheme();
}

onMounted(()=>{
  checkTheme();
})

</script>
<template>
  <section class="started" :style="{ backgroundImage: `url(https://i.imgur.com/Kf5LQNB.png)` }">
    <img src="../assets/logo-spotify.svg" alt="logo-spotify" class="started-img" />
    <div class="started-footer">
      <StartedMode :mode="mode">
        <template v-slot:started>
          <h1 class="title">Enjoy Listening To Music</h1>
          <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus.
            Cursus ornare id
            scelerisque aliquam.
          </p>
        </template>
        <template v-slot:continue>
          <h1 class="title">Choose Mode</h1>
          <div class="sun-moon">
            <div class="sun-moon-item" @click="switchThemeDark">
              <figure>
                <img src="../assets/moon.png" alt="moon">
              </figure>
              <p>Dark Mode</p>
            </div>
            <div class="sun-moon-item" @click="switchThemeLight">
              <figure>
                <img src="../assets/sun.png" alt="sun">
              </figure>
              <p>Light Mode</p>
            </div>

          </div>
        </template>
      </StartedMode>
      <Button
            fontSize="20px"
            width="100%"
            height="92px"
            name="Get Started"
            @click="onHandleMode" 
            v-if="active"
      >
      </Button>
      <Button
            fontSize="20px"
            width="100%"
            height="92px"
            name="Continue"
            @click="gotoLogin" 
            v-else
      >
      </Button>
    </div>
  </section>

</template>
<style scoped lang="scss">
@import "../helper/mixin";

.sun-moon {
  display: flex;
  justify-content: space-around;

  &-item {
    figure {
      display: block;
      width: 73px;
      height: 73px;
      line-height: 88px;
      text-align: center;
      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(43.5px);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.01);
      transition: all .5s;
      &:hover {
        border: 2px solid #42C83C;
      }
    }
    p {
      @include styleText(#DADADA, 17px, 700);
      line-height: 23px;
    }
  }
}

.started {
  position: relative;
  height: 890px;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: v-bind('theme.backgroundColorStarted');

  .started-img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .started-footer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 300px;
    margin-bottom: 69px;


    .title {
      line-height: 34px;
      text-align: center;
      text-transform: capitalize;
      @include styleText(#DADADA, 25px, 700);

    }

    .intro {
      line-height: 23px;
      text-align: center;
      @include styleText(#797979, 17px, 400);
    }

    .btn-started {
      @include button(100%, 92px, 30px, 22px);
    }
  }
}
</style>