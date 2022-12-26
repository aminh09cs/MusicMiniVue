<template>
  <section class="list-flavor">
    <div class="list-flavor">
      <div class="list-flavor-header">
        <p>PUBLIC PLAYLIST</p>
      </div>
      <div class="list-flavor-content">
        <div class="list-flavor-content-song" v-for="song in listSongs">
          <div class="left">
            <span class="play">
              <img :src="song.bgUrl" alt="">
            </span>
            <div>
              <p class="song">{{ song.nameSong }}</p>
              <p class="artist">{{ song.artist }}</p>
            </div>
          </div>
          <div class="right">
            <p class="time">{{ song.time }}</p>
            <span class="flavor"><font-awesome-icon icon="fa-solid fa-ellipsis" /></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
const listSongs = ref([
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
  {
    nameSong: 'Bad Guy',
    artist: 'Billie Eilish',
    bgUrl: 'https://i.imgur.com/Lx5OODW.png',
    time: '5:33'
  },
  {
    nameSong: 'Scorpin',
    artist: 'Drake',
    bgUrl: 'https://i.imgur.com/eKv4wRQ.png',
    time: '5:33'
  },
])
</script>
<style scoped lang="scss">
@import "../../helper/mixin";

.list-flavor {
  margin-top: 19px;

  h1 {
    @include styleText(#D6D6D6, 15px, 700);
  }

  .list-flavor {
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
      height: 440px;
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
            img {
              width: 58px;
              height: 56px;
            }

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
</style>