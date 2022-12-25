<script setup>
</script>
<template>
  <section class="auth">
    <div class="auth-top">
      <div class="btn-back">
        <router-link :to="{ name: 'started' }"><img src="../../assets/Vector.png" alt=""></router-link>
      </div>
    </div>
    <div class="auth-content">
      <div class="auth-content-top">
        <img src="../../assets/logo-spotify.svg" alt="logo-spotify" />
        <h1>Enjoy listening to music</h1>
        <p>Spotify is a proprietary Swedish audio streaming and media services provider</p>
      </div>
      <div class="auth-content-bottom">

        <div class="re-sign-btn">
          <button>
            <router-link :to="{ name: 'register' }">Register</router-link>
          </button>
          <button>
            <router-link :to="{ name: 'sign-in' }">Sign In</router-link>
          </button>
        </div>
      </div>
    </div>
    <img src="../../assets/15mag-billie-03-master675-v3 1.png" alt="15-mag" class="img-foot" />
  </section>
</template>
<style scoped lang="scss">
@import "../../helper/mixin";

.auth {
  position: relative;

  width: 390px;
  height: 844px;
  background-color: #1C1B1B;
  background-repeat: no-repeat;

  &-top {
    .btn-back {
      position: absolute;
      top: 30px;
      left: 30px;
      @include button-back();
    }
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 306px;
    text-align: center;

    z-index: 10;

    &-top {
      margin-bottom: 55px;

      img {
        margin-bottom: 55px;
      }

      h1 {
        @include styleText(#F2F2F2, 26px, 700);
        line-height: 35px;
        text-transform: capitalize;
        margin-bottom: 21px;
      }

      p {
        @include styleText(#A0A0A0, 17px, 400);
        line-height: 23px;
      }
    }

    &-bottom {
      .re-sign-btn {
        display: flex;
        justify-content: space-between;

        button {
          @include button(147px, 73px, 26px, 19px);

          a {
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .img-foot {
    position: absolute;
    bottom: 0;
  }
}
</style>

