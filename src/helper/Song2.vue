<script setup>
import { onMounted, ref, defineProps } from 'vue';
import {useThemeStore} from '../stores/theme';
import { storeToRefs } from 'pinia';
const props = defineProps(["song_", "className"])

//refs
const convertedData = ref({
  name: props.song_.nameSong,
  artist: props.song_.artist,
  time: props.song_.time,
  bgUrl: props.song_.bgUrl || ""
})
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
            <p class="name">{{ convertedData.name }}</p>
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
            .name {
              @include styleText(v-bind('theme.colorPlayList1'), 16px, 700);
              line-height: 22px;
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
</style>
