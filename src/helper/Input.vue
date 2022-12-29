<template>
<input 
  :type="type" 
  :placeholder="placeholder" 
  v-model="data"
/>
</template>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps(["type", "placeholder", "border"]);

const data = ref('');
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