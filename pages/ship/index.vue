<template>
  <div class="flex flex-wrap gap-5 justify-center items-center mt-8">
    <CardShip v-for="(ship, index) in data" :key="index" :data="ship" />
  </div>
</template>
<script setup lang="ts">
import { ships } from "../../types/state";
import { type IShip } from "~~/types/ship";

const data = ships as unknown as IShip[];
console.log("this data", data);
</script>
