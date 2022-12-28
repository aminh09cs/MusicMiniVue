<template>
<input 
  :type="type" 
  :placeholder="placeholder" 
/>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps(["type", "placeholder", "border"]);
</script>
<style scoped lang="scss">
input{
  padding: 29px;
  border: 1px solid v-bind('border');
  background: transparent;
  color: white;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
}

</style>