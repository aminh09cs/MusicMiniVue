<script setup>

// const onEnter = (el) =>{
//   el.style.color= 'red'
// }
// const onAfterEnter = (el) =>{
//   el.style.color= 'blue'
// }
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.fullPath"></component>
    </transition>
  </router-view>
</template>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity .5s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
