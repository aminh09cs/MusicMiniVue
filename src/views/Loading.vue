<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import {useThemeStore} from '../stores/theme'
import { storeToRefs } from 'pinia';


//ref
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

onMounted(() => {
  setTimeout(() => {
    router.push({ name: 'started' })
  }, 4000)
  checkTheme();
})



</script>
<template>
  <section 
    class="loading"    
    :class="getdefaultTheme"
  >
    <img src="../assets/logo-spotify.svg" alt="logo-spotify" class="loading-img" />
  </section>

</template>
<style scoped lang="scss">
.loading {
  position: relative;
  width: 100%;
  height: 100vh;
  background: v-bind('theme.background');

  .loading-img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    animation: blur 3s;
  }
}

/* @media screen and (min-width: 390px) {
  body {
    background-color: lightblue;
  }
} */

//keyframes
@keyframes blur {
  0% {
    filter: blur(4px);
  }

  50% {
    filter: blur(2px);
  }

  100% {
    filter: blur(0);
  }
}
</style>