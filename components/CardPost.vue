<template>
  <div class="bg-white shadow-md rounded-lg p-4 w-60">
    <h6 class="text-xl font-semibold pb-2">{{ post.title }}</h6>
    <p>{{ post.body }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps(["post"]);
</script>
