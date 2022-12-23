<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const gotoSupport = () => {
  router.push({ name: "support" });
}

const info = ref({
  fullname: "",
  email: "",
  password: "",
})

const toggleEye = ref(true);

//methods
const validateEmail = (email) => {
  let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return regex.test(email)
};
const validatePassword = (password) => {
  return password.length > 6;
}
const onSubmit = () => {
  if (!validateEmail(info.value.email) || !validatePassword(info.value.password)) {
    alert('YOUR GMAIL OR YOUR PASSWORD IS FAILED');
  }
  else {
    alert('SUCCESS');
    info.value.fullname = "";
    info.value.email = "";
    info.value.password = "";
  }

}
const onShowPassword = () => {
  //document.querySelector(".password-eye").type = "text";
  toggleEye.value = !toggleEye.value;
}
</script>

<template>
  <div class="form-register">
    <h1>Register</h1>
    <p>If You Need Any Support <span @click=gotoSupport>Click Here</span></p>
    <form class="form-register-content" @submit.prevent="onSubmit">
      <input type="text" placeholder="Full Name" v-model="info.fullname" />
      <input type="text" placeholder="Enter Email" v-model="info.email" />
      <input type="password" placeholder="Password" v-model="info.password" v-if="toggleEye" class="password" />
      <input type="text" placeholder="Password" v-model="info.password" v-else class="password" />
      <div class="eye" @click="onShowPassword">
        <font-awesome-icon icon="fa-solid fa-eye-slash" :icon="{}" v-if="toggleEye" />
        <font-awesome-icon icon="fa-solid fa-eye" v-else />
      </div>

      <p>Recovery password</p>

      <button type="submit" class="btn-submit">Register Account</button>
      <div class="form-footer">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
    </form>
  </div>

</template>

<style scoped lang="scss">
.form-register {
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    color: #F2F2F2;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    color: #E1E1E1;

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
      padding: 29px;
      border: 1px solid #414141;
      background: transparent;
      color: white;
      border-radius: 30px;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .eye {
      position: absolute;
      right: 20px;
      top: 51%;
      color: #5B5B5B;

      cursor: pointer;

    }

    p {
      font-weight: 700;
      font-size: 14px;
      line-height: 19px;
      text-align: left;

      color: #AEAEAE;
    }
  }

  .btn-submit {
    width: 100%;
    height: 80px;
    background: #42C83C;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
    border-radius: 30px;

    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    color: #FFFFFF;
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