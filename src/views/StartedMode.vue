<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps(["mode"])
onMounted(() => {
})
</script>

<template>
  <slot :name="mode"></slot>
</template>

<style>

</style>