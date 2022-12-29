<script setup>
import Song2 from '../../helper/Song2.vue';
import { onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { storeToRefs } from 'pinia';
//refs
const theme = ref({});
const listSongs = ref([
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
])
//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);

//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}

onMounted(() => {
  checkTheme();
})
</script>
<template>
  <section class="profile-container">
    <section class="profile">
      <header class="profile-header">
        <div class="profile-header-top">
          <div class="profile-header-top-back">
            <img :src="`${theme.vector}`" alt="">
          </div>
          <div class="profile-header-top-slogan">
            Profile
          </div>
          <div class="profile-header-top-tool">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
        <div class="profile-header-info">
          <div class="profile-header-info-img">
            <img src="../../assets/profile.png" alt="">
          </div>
          <p class="profile-header-info-mail">
            Soroushnorozyui@gmail.com
          </p>
          <h5 class="profile-header-info-name">
            Soroushnrz
          </h5>
          <div class="profile-header-info-follow">
            <div>
              <p>778</p>
              <p>Following</p>
            </div>
            <div>
              <p>243</p>
              <p>Follower</p>
            </div>
          </div>
        </div>
      </header>
      <div class="profile-title">
          PUBLIC PLAYLIST
      </div>
      <div class="profile-content">
        <Song2
          v-for="song in listSongs"
          className="song-profile"
          :song_ = "song"
        >
        </Song2>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.profile-container {

  .profile {

    .profile-header {
      border-radius: 30px;
      background: v-bind('theme.backgroundHeader');

      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #CFCFCF;
        padding: 30px 35px 16px;

        &-back {
          @include button-back();
          background: v-bind('theme.backgroundBtnPlay');
        }

        &-slogan {
          @include styleText(v-bind('theme.colorProfile'), 18px, 700);
          line-height: 24px;
        }
        &-tool{
          color: v-bind('theme.searchTool');
        }
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        text-align: center;
        padding-bottom: 10px;

        &-mail {
          @include styleText(v-bind('theme.colorGmail'), 12px, 400);
          line-height: 16px;
        }

        &-name {
          @include styleText(#FFFFFF, 20px, 700);
          line-height: 27px;
        }

        &-follow {
          display: flex;
          width: 200px;
          justify-content: space-between;

          div {
            p:nth-of-type(1) {
              @include styleText(v-bind('theme.colorFollow'), 20px, 700);
              line-height: 27px;
            }

            p:nth-of-type(2) {
              @include styleText(v-bind('theme.colorFollow'), 14px, 400);
              line-height: 19px;
            }
          }
        }
      }
    }
  }
  .profile-title{
    @include styleText(v-bind('theme.colorPlayList'), 15px, 700);
    line-height: 20px;
    margin: 20px 0;
    margin-left: 30px;

  }
  .profile-content {
    margin: 0 35px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 442px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
      display: none;
    }
}
</style>