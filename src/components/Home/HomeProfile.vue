<script setup>
import Song2 from '../../helper/Song2.vue';
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
<template>
  <section class="profile-container">
    <section class="profile">
      <header class="profile-header">
        <div class="profile-header-top">
          <div class="profile-header-top-back">
            <img src="../../assets/Vector.png" alt="">
          </div>
          <div class="profile-header-top-slogan">
            Profile
          </div>
          <div class="profile-header-top-tool">
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
        <div class="profile-header-info">
          <div class="profile-header-info-img">
            <img src="../../assets/profile.png" alt="">
          </div>
          <p class="profile-header-info-mail">
            Soroushnorozyui@gmail.com
          </p>
          <h5 class="profile-header-info-name">
            Soroushnrz
          </h5>
          <div class="profile-header-info-follow">
            <div>
              <p>778</p>
              <p>Following</p>
            </div>
            <div>
              <p>243</p>
              <p>Follower</p>
            </div>
          </div>
        </div>
      </header>
      <div class="profile-title">
          PUBLIC PLAYLIST
      </div>
      <div class="profile-content">
        <Song2
          v-for="song in listSongs"
          className="song-profile"
          :song_ = "song"
        >
        </Song2>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.profile-container {

  .profile {

    .profile-header {
      border-radius: 30px;
      background-color: #A2A2A2;

      &-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #CFCFCF;
        padding: 30px 35px 16px;

        &-back {
          @include button-back();
          background: rgba(255, 255, 255, 0.04);
        }

        &-slogan {
          @include styleText(#DDDDDD, 18px, 700);
          line-height: 24px;
        }
      }

      &-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
        text-align: center;

        &-mail {
          @include styleText(#D8D4D4, 12px, 400);
          line-height: 16px;
        }

        &-name {
          @include styleText(#FFFFFF, 20px, 700);
          line-height: 27px;
        }

        &-follow {
          display: flex;
          width: 200px;
          justify-content: space-between;

          div {
            p:nth-of-type(1) {
              @include styleText(#FFFFFF, 20px, 700);
              line-height: 27px;
            }

            p:nth-of-type(2) {
              @include styleText(#A2A2A2, 14px, 400);
              line-height: 19px;
            }
          }
        }
      }
    }
  }
  .profile-title{
    @include styleText(#D6D6D6, 15px, 700);
    line-height: 20px;
    margin: 20px 0;
    margin-left: 30px;

  }
  .profile-content {
    margin: 0 35px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    height: 451px;
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
      display: none;
    }
}
</style>