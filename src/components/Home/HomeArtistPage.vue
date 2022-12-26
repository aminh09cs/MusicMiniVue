<script setup>
import { ref } from 'vue';
const listAlbums = ref([
  {
    nameAlbum: 'Lililiasas',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameAlbum: 'Happier Than Ever',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },
  {
    nameAlbum: 'Lililiasas',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameAlbum: 'Happier Than Ever',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },
  {
    nameAlbum: 'Lililiasas',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameAlbum: 'Happier Than Ever',
    artist: 'Billie Eilish',
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
          <div class="album" v-for="(album, i) in listAlbums" :key="i">
            <img :src="album.bgUrl" alt="">
            <p>{{ album.nameAlbum }}</p>
          </div>
        </div>
      </div>
      <div class="artist-profile-inventory-songs">
        <p class="title">Songs</p>
        <div class="songs">
          <div class="song" v-for="song in listSongs">
            <div class="left">
              <span class="play"><font-awesome-icon icon="fa-solid fa-play" /></span>
              <div>
                <p class="song">{{ song.nameSong }}</p>
                <p class="artist">{{ song.artist }}</p>
              </div>
            </div>
            <div class="right">
              <p class="time">{{ song.time }}</p>
              <span class="flavor"><font-awesome-icon icon="fa-solid fa-heart" /></span>
            </div>
          </div>
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
    background-repeat: no-repeat;

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

        .album {
          img {
            width: 140px;
            height: 135px;
          }

          p {
            @include styleText(#d1d1d1, 13PX, 700);
            margin-top: 18px;
            margin-left: 15px;
          }
        }
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
        height: 100px;
        overflow-y: auto;

        .song {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .left {
            display: flex;
            align-items: center;
            color: #d6d6d6;
            gap: 33px;

            .play {
              @include button-play();
            }

            div {
              .song {
                @include styleText(#d6d6d6, 16px, 700);
                line-height: 22px;
              }

              .artist {
                @include styleText(#d6d6d6, 12px, 400);
                line-height: 16px;
              }
            }
          }

          .right {
            display: flex;
            gap: 51px;
            align-items: center;

            .time {
              @include styleText(#d6d6d6, 15px, 400);
              line-height: 20px;
            }

            .flavor {
              color: #565656;
            }
          }
        }
      }

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>