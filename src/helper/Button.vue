<template>
<button
    :style="{
        fontSize:fontSize,
        width: width,
        height: height,
        color: color
    }"
>
    {{ name }}
</button>
</template>
<script setup>
const props = defineProps([
    "fontSize",
    "width",
    "height",
    "name",
    "color"
]);
</script>
<style lang="scss" scoped>
button{
  width: 100%; //
  height: 80px; // 
  line-height: 27px; //
  text-transform: capitalize;
  background-color: #42C83C;
  border: 2px solid #42C83C;
  border-radius: 30px;
  color: #F6F6F6;
  font-weight: 700;
  font-size: 20px; //

  transition: background-color .5s;
  cursor: pointer;
  &:hover {
    background-color: transparent;
  }
}
</style>