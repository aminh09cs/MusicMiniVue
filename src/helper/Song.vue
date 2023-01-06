<script setup>
import { onMounted, ref, defineProps, inject} from 'vue';
import {useThemeStore} from '../stores/theme';
import {useSpotifyStore} from '../stores/dataSpotify'
//provide-inject
const { updateMode } = inject('mode');
const props = defineProps(["song", "className"]);


//refs
const convertedData = ref({
    bgUrl: props.song.bgUrl,
    name: props.song.nameAlbum || props.song.nameSong,
    artist: props.song.artist || "",
    idArtist: props.song.idArtist
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
    updateMode();
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
    <img :src="convertedData.bgUrl" :style="{width:'147px', height:'185px', overflow:'hidden'}">
    <div class="name"><p>{{ convertedData.name }}</p></div>
    <p class="artist" @click="gotoArtistPage(convertedData.idArtist)">{{ convertedData.artist }}</p>
</section>
</template>

<style scoped lang="scss">
@import "./mixin";
.song{
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
    p.artist{
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
@keyframes move {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
</style>