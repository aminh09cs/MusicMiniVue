<template>
<input 
  :type="type" 
  :placeholder="placeholder" 
  :value="modelValue"
  @input="$emit('update:modelValue', $event.target.value)"
/>
</template>
<script setup>
defineProps(["type", "placeholder", "border", "modelValue"]);
defineEmits(['update:modelValue']);
</script>
<style scoped lang="scss">
input{
  padding: 29px;
  border: 1px solid v-bind('border');
  background: transparent;
  color: rgb(240, 86, 112);
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
}

</style>