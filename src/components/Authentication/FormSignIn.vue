<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const gotoSupport = () => {
  router.push({ name: "support" });
}

const info = ref({
  name: "",
  password: "",
})

const toggleEye = ref(true);

//methods
const onSubmit = () => {
  console.log("no working");
  info.value.name = "";
  info.value.password = "";
  router.push({ name: 'home' });

}
const onShowPassword = () => {
  //document.querySelector(".password-eye").type = "text";
  toggleEye.value = !toggleEye.value;
}
</script>

<template>
  <div class="form-signup">
    <h1>Sign In</h1>
    <p>If You Need Any Support <span @click=gotoSupport>Click Here</span></p>
    <form class="form-signup-content" @submit.prevent="onSubmit">
      <input type="text" placeholder="Enter Username or Email" v-model="info.name" />
      <input type="password" placeholder="Password" v-model="info.password" v-if="toggleEye" class="password" />
      <input type="text" placeholder="Password" v-model="info.password" v-else class="password" />
      <div class="eye" @click="onShowPassword">
        <font-awesome-icon icon="fa-solid fa-eye-slash" :icon="{}" v-if="toggleEye" />
        <font-awesome-icon icon="fa-solid fa-eye" v-else />
      </div>

      <p>Recovery password</p>

      <button type="submit" class="btn-submit">Sign In</button>
      <div class="form-footer">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
    </form>
  </div>

</template>

<style scoped lang="scss">
@import '../../helper/mixin';

.form-signup {
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    @include styleText(#F2F2F2, 30px, 700);
    line-height: 41px;
  }

  p {
    @include styleText(#E1E1E1, 12px, 400);

    span {
      cursor: pointer;
      color: #38B432;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;

    input {
      @include input-form();
    }

    .eye {
      position: absolute;
      right: 20px;
      top: 37%;
      color: #5B5B5B;

      cursor: pointer;
      ;
    }

    p {
      @include styleText(#AEAEAE, 14px, 700);
      line-height: 19px;
      text-align: left;
    }
  }

  .btn-submit {
    @include button(100%, 80px, 27px, 20px);
  }

  .form-footer {
    display: flex;
    align-items: center;
    gap: 5px;

    div {
      width: 45%;
      height: 2px;
      background-color: #AEAEAE;
    }
  }
}
</style>