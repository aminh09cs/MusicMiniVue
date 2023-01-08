<script setup>
import Song2 from '../../helper/Song2.vue';
import { onBeforeMount, onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { useSpotifyStore } from '../../stores/dataSpotify';
//refs
const theme = ref({});
const dataFlavor = ref([])
//store
const themeStore = useThemeStore();
const spotifyStore = useSpotifyStore();

//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}
onBeforeMount(async ()=>{
  await spotifyStore.getUser();
  console.log(spotifyStore.getUserPlaylistItems);
  spotifyStore.getUserPlaylistItems?.items?.forEach((item)=>{;
    dataFlavor.value.push({
      nameSong: item.track.name,
      artist: item.track.artists[0].name,
      bgUrl: item.track.album.images[0].url,
      time: convertMinutes(item.track.duration_ms),
      idArtist: item.track.artists[0].id
    })
  })
})

const convertMinutes = (mili) => {
  let minutes = Math.floor(mili / 60000);
  let seconds = (mili / 1000 - minutes * 60).toFixed(0);
  if (seconds === '60') {
    return `${minutes + 1}:00`;
  }
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
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
            <img :src="`${spotifyStore?.user_info?.images[0]?.url}`" alt="">
          </div>
          <p class="profile-header-info-mail">
            {{ spotifyStore?.user_info?.email? spotifyStore?.user_info?.email : "mail" }}
          </p>
          <h5 class="profile-header-info-name">
            {{ spotifyStore?.user_info?.display_name? spotifyStore?.user_info?.display_name : "name" }}
          </h5>
          <div class="profile-header-info-follow">
            <div>
              <p>{{ spotifyStore?.user_info?.followers ? spotifyStore?.user_info?.followers.total : "null" }}</p>
              <p>Following</p>
            </div>
            <div>
              <p>{{ spotifyStore?.user_info?.followers ? spotifyStore?.user_info?.followers.total : "null" }}</p>
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
          v-for="song in dataFlavor"
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
        &-img{
          img{
              width: 93px;
              height: 93px;
              border-radius: 50%;
          }
        }

        &-mail {
          @include styleText(v-bind('theme.colorGmail'), 12px, 400);
          line-height: 16px;
        }

        &-name {
          @include styleText(v-bind('theme.colorGmail'), 20px, 700);
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