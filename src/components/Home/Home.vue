<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import {useSpotifyStore} from '../../stores/dataSpotify'
import { useRoute } from 'vue-router';
//Link with by slot
import HomeContent from './HomeContent.vue';
import HomeTrend from './HomeTrend.vue';
import HomeDiscover from './HomeDiscover.vue';
import HomeArtistPage from './HomeArtistPage.vue';
import HomeProfile from './HomeProfile.vue';

const id_default = ref("0TnOYISbd1XYRBk9myaseg");
//ref
const mode = ref("trend");
const theme = ref({});

//router

//store
const themeStore = useThemeStore();
const spotifyStore = useSpotifyStore();

//methods
const onHandleMode = (_mode) => {
  mode.value = _mode;
  console.log(mode.value);
}
const checkTheme = () => {
    theme.value = themeStore.chooseTheme();
}
const saveToken = async() =>{
  const lc_access_token = localStorage.getItem('access_token');
  const lc_refresh_token = localStorage.getItem('refresh_token');
  const lc_createAt = localStorage.getItem('createAt');

  const url = await window.location.search;
  const access_token = new URLSearchParams(url).get("access_token");
  const refresh_token = new URLSearchParams(url).get("refresh_token");
  const createAt = new URLSearchParams(url).get("createAt");
  if(access_token !== 'null'){
    localStorage.setItem('access_token', access_token);
    //localStorage.setItem('createAt', createAt);
    if(refresh_token !== 'null'){
      localStorage.setItem('refresh_token', refresh_token);
      await spotifyStore.getRandomTrackData();
      await spotifyStore.getArtist(id_default.value);
    }
    else{
       window.location.href = `http://localhost:5173/refresh_token?refresh_token=${lc_refresh_token}`;
    }
  }
  else{
    window.location.href = `http://localhost:5173/refresh_token?refresh_token=${lc_refresh_token}`;
    await spotifyStore.getRandomTrackData();
    await spotifyStore.getArtist(id_default.value);
  }
}

// onBeforeMount(async ()=>{
//   await spotifyStore.getRandomTrackData();
//   await spotifyStore.getArtist(id_default.value);
// })
onMounted(() => {
  saveToken();
  checkTheme();
})
</script>
<template>
  <section class="home-container">
    <HomeContent :mode="mode">
      <template v-slot:trend>
        <HomeTrend 
        />
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
