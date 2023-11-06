<template>
  <div class="p-5, flex flex-row flex-wrap gap-5 justify-center">
    <CardProfile v-for="(user, index) in users" :key="index" :user="user" />
  </div>
</template>
<script setup lang="ts">
import { type IUser } from "~~/types/user";
const { data: users } = await useFetch<IUser[]>("https://jsonplaceholder.org/users");
console.log("this data", users.value);
</script>
