<script setup>
import Song from '../../helper/Song.vue';
import Song2 from '../../helper/Song2.vue';
import { ref } from 'vue';
const listAlbums = ref([
  {
    nameAlbum: 'Lililiasas',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameAlbum: 'Happier Than Ever',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },
  {
    nameAlbum: 'Lililiasas',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameAlbum: 'Happier Than Ever',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },
  {
    nameAlbum: 'Lililiasas',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameAlbum: 'Happier Than Ever',
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
</script>
<template>
  <section class="artist">
    <div class="artist-profile" :style="{ backgroundImage: `url(${`https://i.imgur.com/kvZzEn4.png`})` }">
      <div class="artist-profile-back">
        <img src="../../assets/Vector.png" alt="">
      </div>
      <div class="artist-profile-tool">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </div>
    <div class="artist-profile-info">
      <p class="name">Billie Eilish</p>
      <p class="albums">2 Album, 67 Track</p>
      <p class="des">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis adipiscing vestibulum orci enim, nascetur vitae
      </p>
    </div>
    <div class="artist-profile-inventory">
      <div class="artist-profile-inventory-albums">
        <p>Albums</p>
        <div class="albums">
          <div class="album" v-for="album in listAlbums">
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
                v-for="song_ in listSongs"
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
      @include styleText(#E3E3E3, 20px, 700);
      line-height: 27px
    }

    .albums {
      @include styleText(#D3D3D3, 13px, 400);
      line-height: 18px;
    }

    .des {
      @include styleText(#A7A7A7, 12px, 400);
      line-height: 16px;
    }
  }

  &-profile-inventory {
    padding: 5px 30px 30px 30px;

    &-albums {
      p {
        @include styleText(#DDDDDD, 16px, 700);
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
        @include styleText(#DDDDDD, 16px, 700);
        line-height: 22px;
        margin-bottom: 15px;
      }
      .songs {
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 71px;
        overflow-y: auto;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>