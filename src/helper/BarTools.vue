<template>
  <section class="bar-tools">
    <span><font-awesome-icon icon="fa-solid fa-repeat" /></span>
    <span><font-awesome-icon icon="fa-solid fa-backward-step" /></span>
    <button class="play-pause" @click="$emit('progress')">
      <span v-if="play"><font-awesome-icon icon="fa-solid fa-play" /></span>
      <span v-else><font-awesome-icon icon="fa-solid fa-pause" /></span>
    </button>
    <span><font-awesome-icon icon="fa-solid fa-forward-step" /></span>
    <span><font-awesome-icon icon="fa-solid fa-shuffle" /></span>
  </section>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps(["play"]);
const emit = defineEmits(['progress'])

</script>

<style scoped lang="scss">
.bar-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;

  .play-pause {
    width: 72px;
    height: 72px;
    background-color: #42C83C;
    border-radius: 50%;

    span {
      color: #ffffff;
      font-size: 25px;
    }
  }

  span {
    color: #A7A7A7;
  }
}
</style>