<template>
  <div class="p-5, flex flex-row flex-wrap gap-5 justify-center">
    <CardProfile v-for="(user, index) in users" :key="index" :user="user" />
  </div>
  <div>
    <div class="container m-5 text-center">
      <p class="text-red-400 font-bold text-3xl">This Posts</p>
    </div>
    <div class="p-5, flex flex-row flex-wrap gap-5 justify-center">
      <CardPost v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IPost } from "~/types/post";
import { type IUser } from "~~/types/user";
const { data: users } = await useFetch<IUser[]>("https://jsonplaceholder.org/users");
console.log("this data", users.value);

const { data: posts } = useFetch<IPost[]>("https://jsonplaceholder.typicode.com/posts");
</script>
