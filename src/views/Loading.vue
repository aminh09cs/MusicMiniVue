<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter();

//It's not necessary inside onMounted
onMounted(() => {
  setTimeout(() => {
    router.push({ name: 'started' })
  }, 4000)
})
</script>
<template>
  <section class="loading">
    <img src="../assets/logo-spotify.svg" alt="logo-spotify" class="loading-img" />
  </section>

</template>
<style scoped lang="scss">
.loading {
  position: relative;
  background: #0D0C0C;
  width: 100%;
  height: 100vh;

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