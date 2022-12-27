<template>
  <section 
      class="music-lyric" 
      :style="style"
  >
    okokok
  </section>
</template>
<script setup>

import { defineProps } from 'vue';

const props = defineProps(["style"]);
console.log(props.styles);
</script>
<style scoped lang="scss">
.music-lyric {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .5s;
}
</style>