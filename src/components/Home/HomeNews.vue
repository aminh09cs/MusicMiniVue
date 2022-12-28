<script setup>
import Song from '../../helper/Song.vue';
import Song2 from '../../helper/Song2.vue';


import {useThemeStore} from '../../stores/theme';
import { storeToRefs } from 'pinia';

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
//refs
const listNews = ref([
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },

])
const listSongs = ref([
  {
    nameSong: 'As It Was',
    artist: 'Harry Styles',
    time: '5:33'
  },
  {
    nameSong: 'God Did',
    artist: 'DJ Khaled',
    time: '5:33'
  },
  {
    nameSong: 'Talking to Moon',
    artist: 'Bruno Mars',
    time: '5:33'
  },
  {
    nameSong: 'As It Was',
    artist: 'Harry Styles',
    time: '5:33'
  },
  {
    nameSong: 'God Did',
    artist: 'DJ Khaled',
    time: '5:33'
  },
  {
    nameSong: 'Talking to Moon',
    artist: 'Bruno Mars',
    time: '5:33'
  },
])
const theme = ref({});


//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);

//methods
const checkTheme = () =>{
  if(getdefaultTheme.value === 'dark'){
    theme.value = themeStore.getThemeDark;
  }
  else{
    theme.value = themeStore.getThemeLight;
  }
}

const gotoSong = (artist) => {
  router.push({
    name: 'music',
    params: { id: artist }
  });
}

onMounted(() => {
  checkTheme();
})
</script>
<template>
  <div class="home-news">
    <div class="news">
      <div class="news-content" v-for="song in listNews">
        <Song 
            @click="gotoSong"
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
              v-for="song_ in listSongs"
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