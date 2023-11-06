<template>
  <div class="p-5, flex flex-row flex-wrap gap-5 justify-center">
    <CardPost v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script setup lang="ts">
interface Post {
  id: number;
  title: string;
  body: string;
}

const { data: posts, pending, error } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");
console.log("this data", posts.value);
</script>
