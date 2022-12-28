<script setup>
import { onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { storeToRefs } from 'pinia';
//Link with by slot
import HomeContent from './HomeContent.vue';
import HomeTrend from './HomeTrend.vue';
import HomeDiscover from './HomeDiscover.vue';
import HomeArtistPage from './HomeArtistPage.vue';
import HomeProfile from './HomeProfile.vue';

//ref
const mode = ref("trend");
const theme = ref({});

//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);

//methods
const onHandleMode = (_mode) => {
  mode.value = _mode;
  console.log(mode.value);
}
const checkTheme = () =>{
    theme.value = themeStore.chooseTheme();
}
onMounted(() => {
  checkTheme();
})
</script>
<template>
  <section class="home-container">
    <HomeContent :mode="mode">
      <template v-slot:trend>
        <HomeTrend />
      </template>
      <template v-slot:discover>
        <HomeDiscover />
      </template>
      <template v-slot:flavor>
        <HomeArtistPage />
      </template>
      <template v-slot:profile>
        <HomeProfile />
      </template>
    </HomeContent>
    <footer class="home-footer">
      <div class="home-footer-content">
        <button @click="onHandleMode('trend')"><font-awesome-icon icon="fa-solid fa-square" /></button>
        <button @click="onHandleMode('discover')"> <font-awesome-icon icon="fa-solid fa-compass" /></button>
        <button @click="onHandleMode('flavor')"> <font-awesome-icon icon="fa-solid fa-heart" /></button>
        <button @click="onHandleMode('profile')"> <font-awesome-icon icon="fa-solid fa-user" /></button>
      </div>
    </footer>
  </section>
</template>
<style scoped lang="scss">
@import "../../helper/mixin";

.home-container {
  height: 844px;
  background: v-bind('theme.backgroundHome');

  .home-footer {
    background: v-bind('theme.backgroundHomeFooter');
    padding: 16px 40px;
    border-top: 1px solid #E5DEDE;

    &-content {
      display: flex;
      justify-content: space-between;

      button {
        background-color: transparent;
        color: #737373;
        cursor: pointer;


        &:hover {
          color: #42C83C;
        }
      }
    }
  }
}
</style>
