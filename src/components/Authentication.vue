<script setup>
</script>
<template>
  <section class="auth">
    <div class="auth-top">
      <router-link :to="{ name: 'started' }"><img src="../assets/Vector.png" alt=""></router-link>
    </div>
    <div class="auth-content">
      <div class="auth-content-top">
        <img src="../assets/logo-spotify.svg" alt="logo-spotify" />
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
    <img src="../assets/15mag-billie-03-master675-v3 1.png" alt="15-mag" class="img-foot" />
  </section>
</template>
<style scoped lang="scss">
.auth {
  border-radius: 30px;
  position: relative;

  width: 390px;
  height: 844px;
  background-color: #1C1B1B;
  background-repeat: no-repeat;

  &-top {
    position: absolute;
    top: 30px;
    left: 30px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-color: #1f1f1f;
    border-radius: 50%;

    cursor: pointer;
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    text-align: center;

    z-index: 10;

    &-top {
      margin-bottom: 55px;

      img {
        margin-bottom: 55px;
      }

      h1 {
        font-weight: 700;
        font-size: 26px;
        line-height: 35px;
        text-transform: capitalize;
        margin-bottom: 21px;

        color: #F2F2F2;
      }

      p {
        font-weight: 400;
        font-size: 17px;
        line-height: 23px;
        text-align: center;

        color: #A0A0A0;
      }
    }

    &-bottom {
      display: flex;
      flex-direction: column;
      gap: 25px;

      .title {
        font-weight: 700;
        font-size: 26px;
        line-height: 35px;
        color: #F2F2F2;
      }

      .slogan {
        font-weight: 400;
        font-size: 17px;
        line-height: 23px;
        text-align: center;
        color: #A0A0A0;
      }

      .re-sign-btn {
        button {
          width: 147px;
          height: 73px;

          box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
          border-radius: 30px;

          font-weight: 700;
          font-size: 19px;
          line-height: 26px;
          text-align: center;
          background: transparent;
          transition: background .5s;
          cursor: pointer;

          a {
            color: #FFFFFF;

          }

          &:hover {
            background: #42C83C;
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

