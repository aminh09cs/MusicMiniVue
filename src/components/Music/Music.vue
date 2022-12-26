<template>
  <section class="music-container">
    <section class="music">
      <div class="music-header">
        <div class="music-header-search">
          <img src="../../assets/Vector.png" alt="">
        </div>
        <div class="music-header-slogan">
          Now playing
        </div>
        <div class="music-header-tool">
          <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
      </div>
      <div class="music-song">
        <img src="../../assets/Rectangle 8.png" alt="billie">
        <div class="music-song-content">
          <div class="left">
            <p class="name">Bad Guy</p>
            <p class="artist">Billie Eilish</p>
          </div>
          <div class="right">
            <font-awesome-icon icon="fa-solid fa-heart" />
          </div>
        </div>
        <div class="music-song-time">
          <div class="loading-time">
            <div class="percentage-time"></div>
            <div class="node-time"></div>
          </div>
        </div>
        <div class="music-song-tool">
          <span><font-awesome-icon icon="fa-solid fa-repeat" /></span>
          <span><font-awesome-icon icon="fa-solid fa-backward-step" /></span>
          <button class="play-pause" @click="intervalTime">
            <span v-if="play"><font-awesome-icon icon="fa-solid fa-play" /></span>
            <span v-else><font-awesome-icon icon="fa-solid fa-pause" /></span>
          </button>
          <span><font-awesome-icon icon="fa-solid fa-forward-step" /></span>
          <span><font-awesome-icon icon="fa-solid fa-shuffle" /></span>

        </div>
      </div>
    </section>
  </section>

</template>
<script setup>
import { onMounted, ref } from 'vue';
const percentage = ref(0);
const percentage_ = ref(percentage.value + '%');
const play = ref(true);
const timeSong = ref(30000); //ms
//1% chay 0.3s
const intervalTime = () => {
  play.value = !play.value;
  const t = setInterval(() => {
    if (percentage.value < 100) {
      if (play.value === true) {
        clearInterval(percentage.value);
        clearInterval(percentage_.value);
      }
      else {
        percentage.value += 0.03;
        percentage_.value = percentage.value + '%';
      }
      console.log(percentage.value)
    }
    else {
      clearInterval(t);
    }
  });
}

</script>

<style lang="scss" scoped>
@import '../../helper/mixin';

.music-container {
  height: 844px;
  background: #1C1B1B;

  .music {
    padding: 33px 27px;

    .music-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #CFCFCF;
      margin-bottom: 20px;

      &-search {
        @include button-back();
      }

      &-slogan {
        @include styleText(#DDDDDD, 18px, 700);
        line-height: 24px;
      }
    }

    .music-song {
      img {
        width: 100%;
        height: 370px;
        margin-bottom: 17px;
      }

      &-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 50px;

        .left {
          .name {
            @include styleText(#DFDFDF, 20px, 700);
            line-height: 27px;
          }

          .artist {
            @include styleText(#BABABA, 20px, 400);
            line-height: 27px;
          }
        }

        .right {
          font-size: 20px;
          color: #6c6c6c;
        }
      }

      &-time {
        margin-bottom: 75px;

        .loading-time {
          position: relative;
          width: 100%;
          height: 2px;
          background-color: rgba(136, 136, 136, 0.3);

          .percentage-time {
            position: absolute;
            width: v-bind(percentage_);
            height: 2px;
            background-color: #B7B7B7;
          }

          .node-time {
            position: absolute;
            top: -7px;
            left: v-bind(percentage_);
            border-radius: 50%;
            width: 16px;
            height: 16px;
            background-color: #B7B7B7;
          }
        }
      }

      &-tool {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;

        .play-pause {
          width: 72px;
          height: 72px;
          background-color: #42C83C;
          border-radius: 50%;

          span {
            color: #ffffff;
            font-size: 25px;
          }
        }

        span {
          color: #A7A7A7;
        }
      }
    }

  }
}
</style>