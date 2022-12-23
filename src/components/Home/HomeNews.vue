<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
//refs
const listNews = ref([
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
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


//method
const gotoSong = (artist) => {
  router.push({
    name: 'music',
    params: { id: artist }
  });
}
</script>
<template>
  <div class="home-news">
    <div class="news">
      <div class="news-content" v-for="new_ in listNews" @click="gotoSong(new_.artist)">
        <img :src="new_.bgUrl" alt="">
        <span><font-awesome-icon icon="fa-solid fa-play" /></span>
        <p>{{ new_.nameSong }}</p>
        <p>{{ new_.artist }}</p>
      </div>
    </div>
    <div class="playlists">
      <div class="playlists-header">
        <p>Playlist</p>
        <p>See more</p>
      </div>
      <div class="playlists-content">
        <div class="playlists-content-song" v-for="song in listSongs">
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
</template>

<style lang="scss" scoped>
.home-news {
  .news {
    display: flex;
    flex-direction: row;
    gap: 14px;
    margin-bottom: 35px;
    overflow-x: scroll;

    &-content {
      position: relative;
      width: 147px;

      img {
        margin-bottom: 13px;
      }

      span {
        position: absolute;
        left: 75%;
        top: 69%;

        display: block;
        color: #959595;
        text-align: center;
        width: 29px;
        height: 29px;
        line-height: 29px;
        border-radius: 50%;
        background: #2C2C2C;

      }

      p:nth-of-type(1) {
        margin-left: 5px;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #E1E1E1;
      }

      p:nth-of-type(2) {
        margin-left: 5px;
        font-weight: 400;
        font-size: 14 px;
        line-height: 22px;
        color: #E1E1E1;
      }

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .playlists {
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 26px;

      p:nth-of-type(1) {
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        color: #DBDBDB;
      }

      p:nth-of-type(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #C6C6C6;
      }
    }

    &-content {
      display: flex;
      flex-direction: column;
      gap: 25px;
      height: 100px;
      overflow-y: auto;

      &-song {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          align-items: center;
          color: #d6d6d6;
          gap: 33px;

          .play {
            display: block;
            color: #959595;
            text-align: center;
            width: 29px;
            height: 29px;
            line-height: 29px;
            border-radius: 50%;
            background: #2C2C2C;
          }

          div {
            .song {
              font-weight: 700;
              font-size: 16px;
              line-height: 22px;
            }

            .artist {
              font-weight: 400;
              font-size: 12px;
              line-height: 16px;
            }
          }
        }

        .right {
          display: flex;
          gap: 51px;
          align-items: center;

          .time {
            font-weight: 400;
            font-size: 15px;
            line-height: 20px;
            color: #D6D6D6;
          }

          .flavor {
            color: #565656;
            ;
          }

        }

      }
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>