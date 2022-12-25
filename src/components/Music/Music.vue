<template>
  {{ $route.params.id }} music page
  <section class="music">

  </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

onMounted(() => {
  console.log("data is", route.params.id);
})
</script>