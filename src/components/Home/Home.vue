<script setup>
//Link with by slot
import HomeContent from './HomeContent.vue';
import HomeCommon from './HomeCommon.vue';
import HomeGlobal from './HomeGlobal.vue';
import HomeFlavor from './HomeFlavor.vue';
import HomeProfile from './HomeProfile.vue';

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter();

//ref
const mode = ref("common");

//methods
const getHomeNews = () => {
  router.push({ name: 'home-news' });
}

const onHandleMode = (_mode) => {
  mode.value = _mode;
  console.log(mode.value);
}
onMounted(() => {
  getHomeNews();
})
</script>
<template>
  <section class="home-container">
    <HomeContent :mode="mode">
      <template v-slot:common>
        <HomeCommon />
      </template>
      <template v-slot:global>
        <HomeGlobal />
      </template>
      <template v-slot:flavor>
        <HomeFlavor />
      </template>
      <template v-slot:profile>
        <HomeProfile />
      </template>
    </HomeContent>
    <footer class="home-footer">
      <div class="home-footer-content">
        <button @click="onHandleMode('common')"><font-awesome-icon icon="fa-solid fa-square" /></button>
        <button @click="onHandleMode('global')"> <font-awesome-icon icon="fa-solid fa-compass" /></button>
        <button @click="onHandleMode('flavor')"> <font-awesome-icon icon="fa-solid fa-heart" /></button>
        <button @click="onHandleMode('profile')"> <font-awesome-icon icon="fa-solid fa-user" /></button>
      </div>
    </footer>
  </section>
</template>
<style scoped lang="scss">
@import "../../helper/mixin";


.home-container {
  width: 390px;
  height: 844px;
  background: #1C1B1B;

  .home-footer {
    background: #343434;
    padding: 16px 40px;

    &-content {
      display: flex;
      justify-content: space-between;

      button {
        background-color: transparent;
        color: #737373;
      }
    }
  }
}
</style>
