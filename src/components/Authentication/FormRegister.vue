<script setup>
import Input from "../../helper/Input.vue";
import Button from '../../helper/Button.vue';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import {useThemeStore} from '../../stores/theme'
import { storeToRefs } from 'pinia';
import { defineProps } from 'vue';
//ref
const info = ref({
  fullname: "",
  email: "",
  password: "",
})
const theme = ref({});
const toggleEye = ref(true);
//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);
//router
const router = useRouter();

//props
const props = defineProps(["type", "placeholder"]);

//methods
const gotoSupport = () => {
  router.push({ name: "support" });
}
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}

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
    console.log(info.value);
    info.value.fullname = "";
    info.value.email = "";
    info.value.password = "";
  }

}
const onShowPassword = () => {
  //document.querySelector(".password-eye").type = "text";
  toggleEye.value = !toggleEye.value;
}
onMounted(() => {
  checkTheme();
})

</script>

<template>
  <div class="form-register">
    <h1>Register</h1>
    <p>If You Need Any Support <span @click=gotoSupport>Click Here</span></p>
    <form class="form-register-content" @submit.prevent="onSubmit">
      <Input type="text" placeholder="Full Name" :border="theme.resColorBorder"/>
      <Input type="text" placeholder="Enter Email" :border="theme.resColorBorder"/>
      <Input type="password" placeholder="Password" v-if="toggleEye" class="password" :border="theme.resColorBorder"/>
      <Input type="text" placeholder="Password" v-else class="password" :border="theme.resColorBorder"/>
      <div class="eye" @click="onShowPassword">
        <font-awesome-icon icon="fa-solid fa-eye-slash" :icon="{}" v-if="toggleEye" />
        <font-awesome-icon icon="fa-solid fa-eye" v-else />
      </div>

      <Button
            fontSize="20px"
            width="100%"
            height="80px"
            name="Create Account"
      >
    </Button>
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

.form-register {
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    @include styleText(v-bind('theme.resColorTitle'), 30px, 700);
    line-height: 41px;
  }

  p {
    @include styleText(v-bind('theme.resColorSupport'), 12px, 400);

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


    .eye {
      position: absolute;
      right: 20px;
      top: 55%;
      color: #5B5B5B;
      cursor: pointer;

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