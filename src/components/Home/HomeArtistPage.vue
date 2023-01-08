<script setup>
import Song from '../../helper/Song.vue';
import Song2 from '../../helper/Song2.vue';
import { onBeforeMount, onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { useSpotifyStore } from '../../stores/dataSpotify';

//refs
const theme = ref({});
const artist_info = ref({});
const artist_albums = ref([]);
const artist_tracks= ref([]);
//store
const themeStore = useThemeStore();
const spotifyStore = useSpotifyStore();
//methods
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}
onBeforeMount(()=>{
  artist_info.value = spotifyStore.getArtistInfo;
  spotifyStore.getArtistAlbums.items?.forEach((item)=>{
    artist_albums.value.push({
      nameAlbum: item.name,
      bgUrl: item.images[1].url,
      idAlbum: item.id 
    })
  })
  console.log(spotifyStore.getArtistTopTracks.tracks);
  spotifyStore.getArtistTopTracks.tracks?.forEach((item)=>{
    artist_tracks.value.push({
      nameSong: item.name,
      artist: item.artists[0].name,
      idArtist: item.artists[0].id,
      time: convertMinutes(item.duration_ms),
      idTrack: item.id 
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

onMounted(()=>{
  checkTheme();
})
</script>
<template>
  <section class="artist">
    <div class="artist-profile" :style="{ backgroundImage: `url(${artist_info.images[0].url})`, backgroundSize:'cover', height: '240px'}">
      <div class="artist-profile-back">
        <img src="../../assets/Vector.png" alt="">
      </div>
      <div class="artist-profile-tool">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </div>
    <div class="artist-profile-info">
      <p class="name">{{artist_info.name}}</p>
      <p class="albums">{{artist_albums.length}} Album, {{artist_tracks.length}} Track</p>
      <p class="des">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis adipiscing vestibulum orci enim, nascetur vitae
      </p>
    </div>
    <div class="artist-profile-inventory">
      <div class="artist-profile-inventory-albums">
        <p>Albums</p>
        <div class="albums">
          <div class="album" v-for="album in artist_albums">
            <Song 
                :song="album"
                className="song-artist"
            />
          </div>
        </div>
      </div>
      <div class="artist-profile-inventory-songs">
        <p class="title">Songs</p>
        <div class="songs">
            <Song2 
                v-for="song_ in artist_tracks"
                className="song-artist"
                :song_ = "song_"
            />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.artist {
  &-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #CFCFCF;
    padding: 35px 20px 181px 20px;
    background-repeat: repeat;

    &-back {
      @include button-back();
      background: rgba(255, 255, 255, 0.04);
    }

  }

  &-profile-info {
    text-align: center;
    margin: 10px 60px;

    .name {
      @include styleText(v-bind('theme.colorNameArtist'), 20px, 700);
      line-height: 27px
    }

    .albums {
      @include styleText(v-bind('theme.colorAlbum'), 13px, 400);
      line-height: 18px;
    }

    .des {
      @include styleText(v-bind('theme.colorSlogan'), 12px, 400);
      line-height: 16px;
    }
  }

  &-profile-inventory {
    padding: 5px 30px 30px 30px;

    &-albums {
      p {
        @include styleText(v-bind('theme.colorNameArtist'), 16px, 700);
        line-height: 22px;
        margin-bottom: 15px;
      }

      .albums {
        display: flex;
        flex-direction: row;
        gap: 14px;
        margin-bottom: 35px;
        overflow-x: scroll;
      }

      ::-webkit-scrollbar {
        display: none;
      }
    }

    &-songs {
      .title {
        @include styleText(v-bind('theme.colorNameArtist'), 16px, 700);
        line-height: 22px;
        margin-bottom: 15px;
      }
      .songs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 50px;
        overflow-y: auto;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>