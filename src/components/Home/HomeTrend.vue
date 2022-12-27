<script setup>
import { ref } from 'vue';
import HomeArtists from './HomeArtists.vue';
import HomeTrendInfo from './HomeTrendInfo.vue';
import HomeNews from './HomeNews.vue';
import HomePodcast from './HomePodcast.vue';
import HomeVideo from './HomeVideo.vue';

const mode = ref("news");

//methods
const onHandleMode = (_mode) => {
  mode.value = _mode;
  console.log(mode.value);
}

</script>
<template>
  <div class="home">
    <header class="home-header">
      <div class="home-header-search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="home-header-logo">
        <img src="../../assets/logo-spotify.svg" alt="logo-spotify">
      </div>
      <div class="home-header-tool">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </header>
    <div class="home-banner">
      <div class="home-banner-left">
        <p>New Album</p>
        <h5>Happier Than Ever</h5>
        <h6>Billie Eilish</h6>
      </div>
      <div class="home-banner-right">
        <img src="../../assets/billie.png" alt="billie">
      </div>
    </div>
    <div class="home-content">
      <nav class="home-content-nav">
        <button @click="onHandleMode('news')">News</button>
        <button @click="onHandleMode('videos')">Video</button>
        <button @click="onHandleMode('artists')">Artists</button>
        <button @click="onHandleMode('podcast')">Podcast</button>
      </nav>
      <div class="home-content-content">
        <HomeTrendInfo :mode="mode">
          <template v-slot:news>
            <HomeNews />
          </template>
          <template v-slot:videos>
            <HomeVideo />
          </template>
          <template v-slot:artists>
            <HomeArtists />
          </template>
          <template v-slot:podcast>
            <HomePodcast />
          </template>
        </HomeTrendInfo>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.home {
  width: 334px;
  margin: 0 auto;
  padding: 33px 0;

  @media screen and (max-width: 375px) {
    padding: 33px 15px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #CFCFCF;
    margin-bottom: 20px;

    &-search {
      font-size: 24px;
      cursor: pointer;
    }

    &-logo {

      img {
        width: 108px;
        height: 33px;
      }
    }

    &-tool {
      font-size: 24px;
      cursor: pointer;
      ;
    }
  }

  &-banner {
    display: flex;

    color: #FBFBFB;
    background: #42C83C;
    border-radius: 30px;
    padding: 19px;
    max-height: 334px;

    margin-bottom: 41px;


    &-left {
      display: flex;
      flex-direction: column;
      gap: 10px;

      width: 50%;

      p {
        font-weight: 700;
        font-size: 10px;
        line-height: 14px;
      }

      h5 {
        font-weight: 700;
        font-size: 19px;
        line-height: 26px;
      }

      h6 {
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
      }
    }

    &-right {
      position: relative;

      width: 50%;

      img {
        position: absolute;
        top: -60px;
        left: -170px;
      }
    }
  }

  &-content {
    &-nav {
      display: flex;
      gap: 47px;
      overflow-x: scroll;
      margin-bottom: 30px;



      button {
        @include styleText(#616161, 20px, 700);
        line-height: 27px;
        background: transparent;
        display: block;

        @media screen and (max-width: 375px) {
          font-size: 15px;
        }

        &:after {
          display: block;
          content: '';
          border-bottom: solid 3px #42C83C;
          transform: scaleX(0);
          transition: transform .5s;
          border-radius: 0px 0px 3.5px 3.5px;
        }

        &:hover:after {
          transform: scaleX(1);
        }
      }

    }

    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>