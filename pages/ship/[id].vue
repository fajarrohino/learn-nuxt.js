<template>
  <div>
    <p>Detail Ship</p>
    <p>Post ID: {{ $route.params.id }}</p>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>
