<script setup>
import { onMounted, ref, defineProps, inject} from 'vue';
import { useRouter } from 'vue-router';
import {useThemeStore} from '../stores/theme';
import {useSpotifyStore} from '../stores/dataSpotify'
//provide-inject
const { updateMode } = inject('mode');
const props = defineProps(["song", "className"]);
//router
const router = useRouter();

//refs
const convertedData = ref({
    bgUrl: props.song.bgUrl,
    name: props.song.nameAlbum || props.song.nameSong,
    artist: props.song.artist || "",
    idArtist: props.song.idArtist,
    idTrack: props.song.idTrack
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
const gotoMusicPage = (id_track) =>{
    router.push({ name: 'music', params: { id: id_track } })
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
    <div class="name" @click="gotoMusicPage(convertedData.idTrack)"><p>{{ convertedData.name }}</p></div>
    <div class="nameAlbum">
        <p>{{ convertedData.name }}</p>
    </div>
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

    .nameAlbum {
        white-space: nowrap;
        overflow: hidden;
        width: 147px;

        p {
            @include styleText(v-bind('theme.colorSong'), 16px, 700);
            overflow: hidden;
            line-height: 22px;
            display: inline-block;
        }

        p:hover {
            animation: move 3s;
        }
    }
    p.artist{
        @include styleText(v-bind('theme.colorSong'), 14px, 400);
        line-height: 22px;
    }
}
.song.song-news{
    .nameAlbum{
        display: none;
    }
}
.song.song-artist{
    p:nth-of-type(1){
        text-align: center;
        margin-top: 18px;
    }
    .name{
        display: none;
    }
}
@keyframes move {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}
</style>