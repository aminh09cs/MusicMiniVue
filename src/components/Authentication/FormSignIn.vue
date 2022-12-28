<script setup>
import { ref, onMounted } from 'vue';
import Input from "../../helper/Input.vue";
import Button from '../../helper/Button.vue';
import { useRouter } from 'vue-router';
import {useThemeStore} from '../../stores/theme'
import { storeToRefs } from 'pinia';

//ref
const info = ref({
  name: "",
  password: "",
})
const toggleEye = ref(true);
const theme = ref({});

//store
const themeStore = useThemeStore();
const { getdefaultTheme } = storeToRefs(themeStore);

//router
const router = useRouter();

//methods
const gotoSupport = () => {
  router.push({ name: "support" });
}
const checkTheme = () =>{
  theme.value = themeStore.chooseTheme();
}

const onSubmit = () => {
  console.log(info.value);
  info.value.name = "";
  info.value.password = "";

  router.push({name: "home"})

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
  <div class="form-signup">
    <h1>Sign In</h1>
    <p>If You Need Any Support <span @click=gotoSupport>Click Here</span></p>
    <form class="form-signup-content" @submit.prevent="onSubmit">
      <Input type="text" placeholder="Enter Username or Email" :border="theme.signColorBorder"/>
      <Input type="password" placeholder="Password" v-if="toggleEye" class="password" :border="theme.signColorBorder"/>
      <Input type="text" placeholder="Password" v-else class="password" :border="theme.signColorBorder"/>
      <div class="eye" @click="onShowPassword">
        <font-awesome-icon icon="fa-solid fa-eye-slash" v-if="toggleEye" />
        <font-awesome-icon icon="fa-solid fa-eye" v-else />
      </div>
      <p>Recovery password</p>
      <Button
            fontSize="20px"
            width="100%"
            height="80px"
            name="Sign In"
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

.form-signup {
  width: 100%;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    @include styleText(v-bind('theme.signColorTitle'), 30px, 700);
    line-height: 41px;
  }

  p {
    @include styleText(v-bind('theme.signColorSupport'), 12px, 400);

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