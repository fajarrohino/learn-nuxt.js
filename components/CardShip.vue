<template>
  <div class="bg-white shadow-md rounded-lg p-4 w-80" key="{{ data.id }}">
    <h6 class="text-xl font-semibold pb-2">{{ data.name }}</h6>
    <p>ID : {{ data.id }}</p>
    <p>Muatan : {{ data.loads }}</p>
    <p>Asal Kapal : {{ data.origin }}</p>
    <p>Tujuan Kapal : {{ data.destination }}</p>
    <div class="flex gap-5 m-5">
      <ButtonDelete @click="deleteShip(data.id)" />
      <NuxtLink :to="`/ship/${data.id}`">
        <ButtonAction />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import { deleteShip } from "~/types/state";
defineProps(["data"]);

const route = useRoute();
console.log(route.params.id);
</script>
