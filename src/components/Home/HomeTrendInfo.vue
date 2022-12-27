<script setup>
import { defineProps } from 'vue';

const props = defineProps(["mode"])
</script>
<template>
  <slot :name="mode"></slot>
</template>

<style scoped lang="scss">
@import '../../helper/mixin';
</style>