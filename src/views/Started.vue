<script setup>

import StartedMode from './StartedMode.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
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
            <div class="sun-moon-item">
              <figure>
                <img src="../assets/moon.png" alt="moon">
              </figure>
              <p>Dark Mode</p>
            </div>
            <div class="sun-moon-item">
              <figure>
                <img src="../assets/sun.png" alt="sun">
              </figure>
              <p>Light Mode</p>
            </div>

          </div>
        </template>
      </StartedMode>
      <button class="btn-started" @click="onHandleMode" v-if="active">
        Get Started
      </button>
      <button @click="gotoLogin" class="btn-started" v-else>
        Continue
      </button>
    </div>
  </section>

</template>
<style scoped lang="scss">
/* @media screen and (min-width: 390px) {
  body {
    background-color: lightblue;
  }
} */

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
      font-weight: 700;
      font-size: 17px;
      line-height: 23px;
      color: #DADADA;
    }
  }
}

.started {
  position: relative;
  width: 390px;
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
    left: 47px;
    width: 300px;
    margin-bottom: 69px;


    .title {
      font-weight: 700;
      font-size: 25px;
      line-height: 34px;
      text-align: center;
      text-transform: capitalize;
      color: #DADADA;

    }

    .intro {
      font-weight: 400;
      font-size: 17px;
      line-height: 23px;
      text-align: center;
      color: #797979;
    }

    .btn-started {
      width: 100%;
      height: 92px;
      background-color: #42C83C;
      border: 2px solid #42C83C;
      border-radius: 30px;
      transition: background-color .5s;

      cursor: pointer;

      &:hover {
        background-color: transparent;
      }

      font-weight: 700;
      font-size: 22px;
      line-height: 30px;
      text-transform: capitalize;
      color: #F6F6F6;

    }
  }
}
</style>