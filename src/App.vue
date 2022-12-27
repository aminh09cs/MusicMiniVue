<script setup>
</script>

<template>
  <router-view v-slot="{Component}">
    <transition name="slide" mode="out-in">
        <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
.slide-enter-from{
  opacity: 0;
  transform: translateX(-20%);
}
// .slide-enter-to{
//   opacity: 1;
//   transform: translateX(0);
// }
// .slide-leave-from{
//   opacity: 1;
//   transform: translateX(0);
// }
// .slide-leave-to{
//   opacity: 0;
//   transform: translateX(-20%);
// }
.slide-enter-active, .slive-leave-active{
  transition: opacity 1s, transform 1s;
}
</style>
