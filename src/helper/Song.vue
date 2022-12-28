<script setup>
import { onMounted, ref, defineProps } from 'vue';
import {useThemeStore} from '../stores/theme';
import { storeToRefs } from 'pinia';
const props = defineProps(["song", "className"]);

//refs
const convertedData = ref({
    bgUrl: props.song.bgUrl,
    name: props.song.nameAlbum || props.song.nameSong,
    artist: props.song.artist || ""
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
<section 
    class="song" 
    :class="className"
>
    <img :src="convertedData.bgUrl">
    <p>{{ convertedData.name }}</p>
    <p>{{ convertedData.artist }}</p>
</section>
</template>

<style scoped lang="scss">
@import "./mixin";
.song{
    p:nth-of-type(1){
        @include styleText(v-bind('theme.colorSong'), 16px, 700);
        line-height: 22px;
    }
    p:nth-of-type(2){
        @include styleText(v-bind('theme.colorSong'), 14px, 400);
        line-height: 22px;
    }
}
.song.song-artist{
    p:nth-of-type(1){
        text-align: center;
        margin-top: 18px;
    }
}
</style>