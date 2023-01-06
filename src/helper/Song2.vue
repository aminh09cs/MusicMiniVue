<script setup>
import { onMounted, ref, defineProps, inject } from 'vue';
import {useThemeStore} from '../stores/theme';
import {useSpotifyStore} from '../stores/dataSpotify'
//provide-inject
const { updateMode } = inject('mode');
const props = defineProps(["song_", "className"])
//refs
const convertedData = ref({
  name: props.song_.nameSong,
  artist: props.song_.artist,
  time: props.song_.time,
  bgUrl: props.song_.bgUrl || "",
  idArtist: props.song_.idArtist
})
const theme = ref({});

//store
const themeStore = useThemeStore();
const spotifyStore = useSpotifyStore();


//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}
const gotoArtistPage = async (id) =>{
    await spotifyStore.getArtist(id);
    console.log(id);
    updateMode();
}
onMounted(() => {
  checkTheme();
})

</script>

<template>
<section class="song" :class="className">
    <div class="left">
        <span class="play">
          <font-awesome-icon icon="fa-solid fa-play" />
        </span>
        <img :src="convertedData.bgUrl" class="bg"/>
        <div>
            <div class="name" @click="gotoArtistPage(convertedData.idArtist)"><p>{{ convertedData.name }}</p></div>
            <p class="artist">{{ convertedData.artist }}</p>
        </div>
    </div>
    <div class="right">
        <p class="time">{{ convertedData.time }}</p>
        <span class="flavor"><font-awesome-icon icon="fa-solid fa-heart" /></span>
    </div>
</section>
</template>

<style scoped lang="scss">
@import "./mixin";
.song{
    display: flex;
    justify-content: space-between;
    .left {
          display: flex;
          align-items: center;
          color: #d6d6d6;
          gap: 33px;
          .play {
            @include button-play();
            color: v-bind('theme.colorPlayList2');
            background: v-bind('theme.colorPlayList3');
          }
          img{
            width: 58px;
            height: 56px;
          }
          div {
            cursor: pointer;
            .name{
                white-space: nowrap;
                overflow: hidden;
                width: 147px;
                p{
                    @include styleText(v-bind('theme.colorSong'), 16px, 700);
                    overflow: hidden;
                    line-height: 22px;
                    display: inline-block;
                }
                p:hover{
                    animation: move 3s;
                }
            }
            .artist {
              @include styleText(v-bind('theme.colorPlayList1'), 12px, 400);
              line-height: 16px;
            }
          }
        }
        .right {
          display: flex;
          gap: 51px;
          align-items: center;

          .time {
            @include styleText(v-bind('theme.colorPlayList1'), 15px, 400);
            line-height: 20px;
          }

          .flavor {
            color: #565656;
          }
        }
}


//custom
.song.song-profile{
  .play{
    display: none;
  }
}
.song.song-news{
  .bg{
    display: none;
  }
}
.song.song-artist{
  .bg{
    display: none;
  }
}

@keyframes move {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
</style>
