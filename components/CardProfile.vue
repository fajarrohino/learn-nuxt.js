<template>
  <div class="bg-white shadow-md rounded-lg p-4 w-60">
    <h6 class="text-xl font-semibold pb-2">{{ user.login.username }}</h6>
    <p>name: {{ user.firstname }} {{ user.firstname }}</p>
    <p>email: {{ user.email }}</p>
    <p>Birt Date: {{ user.birthDate }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>Company: {{ user.company.name }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps(["user"]);
</script>
