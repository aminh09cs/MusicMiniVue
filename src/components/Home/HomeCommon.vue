<script setup>
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
        <router-link :to="{ name: 'home-news' }">News</router-link>
        <router-link :to="{ name: 'home-video' }">Video</router-link>
        <router-link :to="{ name: 'home-artists' }">Artists</router-link>
        <router-link :to="{ name: 'home-podcast' }">Podcast</router-link>
      </nav>
      <div class="home-content-content">
        <router-view></router-view>
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

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #CFCFCF;
    width: 334px;
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

      a {
        @include styleText(#616161, 20px, 700);
        line-height: 27px;
        display: block;

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