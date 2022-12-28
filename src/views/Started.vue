<script setup>
import Button from '../helper/Button.vue';
import StartedMode from './StartedMode.vue';
import {useThemeStore} from '../stores/theme'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

//store
const themeStore = useThemeStore();
//refs
const mode = ref("started");
const active = ref(true);
const bgUrl = ref('https://i.imgur.com/eqKM8EF.jpg')
//methods
const onHandleMode = () => {
  mode.value = 'continue';
  active.value = false;
  bgUrl.value = 'https://i.imgur.com/xqnKSyV.jpg';

}
const gotoLogin = () => {
  router.push({ name: "login" });
}

const switchThemeDark = ()=>{
  themeStore.setTheme('dark');
}
const switchThemeLight= ()=>{
  console.log(themeStore.getThemeLight);
  themeStore.setTheme('light');
}

</script>
<template>
  <section class="started" :style="{ backgroundImage: `url(${bgUrl})` }">
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

      transition: all .5s;

      &:hover {
        background-color: #f100ff;
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