<template>
  <div class="bg-white shadow-md rounded-lg p-4 w-80 font-poppins flex-wrap" key="{{ data.id }}">
    <h6 class="text-xl font-semibold pb-2 w-full">Kapal {{ data.name }}</h6>
    <p class="w-full">Muatan : {{ data.loads }}</p>
    <p class="w-full">Asal Kapal : {{ data.origin }}</p>
    <p class="w-full">Tujuan Kapal : {{ data.destination }}</p>
    <div class="flex justify-start gap-4 mt-3">
      <ButtonDelete @click="deleteShip(data.id)" />
      <ButtonAction @click="navigateTo(`/ship/${data.id}`)" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { deleteShip } from "~/types/state";

defineProps(["data"]);
</script>
