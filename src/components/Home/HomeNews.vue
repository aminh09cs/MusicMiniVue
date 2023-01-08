<script setup>
import Song from '../../helper/Song.vue';
import Song2 from '../../helper/Song2.vue';

import {useThemeStore} from '../../stores/theme';
import {useSpotifyStore} from '../../stores/dataSpotify'

import { ref, onMounted, onBeforeMount, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
//refs
const dataNews = ref([]);
const dataNewSongs = ref([]);
const theme = ref({});

//store
const themeStore = useThemeStore();
const spotifyStore = useSpotifyStore();


//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}

// const gotoSong = (artist) => {
//   router.push({
//     name: 'music',
//     params: { id: artist }
//   });
// }
const getDataSearch = () =>{
  spotifyStore.getRandomTrackDataG?.tracks?.items.forEach((item)=>{
    dataNews.value.push(
      {
        nameSong: item.name,
        artist: item.artists[0].name,
        bgUrl: item.album.images[0].url,
        idArtist:item.artists[0].id,
        idTrack: item.id
      })
    dataNewSongs.value.push(
      {
        nameSong: item.name,
        artist: item.artists[0].name,
        time: convertMinutes(item.duration_ms),
        idArtist:item.artists[0].id,
        idTrack: item.id
      })
  });
}
const convertMinutes = (mili) => {
  let minutes = Math.floor(mili / 60000);
  let seconds = (mili/1000 - minutes * 60).toFixed(0);
  if(seconds === '60'){
    return `${minutes+1}:00`;
  }
  return `${minutes}:${seconds<10?"0":""}${seconds}`
}
onBeforeMount(()=>{
  watchEffect(()=>{
    spotifyStore.getRandomTrackDataG,
    getDataSearch();
  })
})
onMounted(() => {
  checkTheme();
})
</script>
<template>
  <div class="home-news">
    <div class="news">
      <div class="news-content" v-for="song in dataNews">
        <Song 
            :song="song"
            className="song-news"  
        />
      </div>
    </div>
    <div class="playlists">
      <div class="playlists-header">
        <p>Playlist</p>
        <p>See more</p>
      </div>
      <div class="playlists-content">
          <Song2 
              v-for="song_ in dataNewSongs"
              className="song-news"
              :song_ = "song_"
          />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../helper/mixin";

.home-news {
  .news {
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 35px;
    overflow-x: scroll;

  }

  .playlists {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 26px;

      p:nth-of-type(1) {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: v-bind('theme.colorPlayListTitle');
      }

      p:nth-of-type(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: v-bind('theme.colorPlayListTitle');
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 25px;
      height: 113px;
      overflow-y: auto;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>