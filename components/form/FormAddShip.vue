<template>
  <form action="" class="bg-gray-50 w-96 p-4 rounded-lg">
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Nama Kapal</label>
      <div class="mt-2">
        <input
          type="text"
          autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          v-model="form.name"
        />
      </div>
    </div>
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Muatan Kapal</label>
      <div class="mt-2">
        <input
          type="text"
          autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          v-model="form.loads"
        />
      </div>
    </div>
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Asal Kapal</label>
      <div class="mt-2">
        <input
          type="text"
          autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          v-model="form.origin"
        />
      </div>
    </div>
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Tujuan Kapal</label>
      <div class="mt-2">
        <input
          type="text"
          autocomplete="street-address"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          v-model="form.destination"
        />
      </div>
    </div>
    <div class="mt-2 flex justify-center">
      <ButtonAdd @click="handleAddShip()" />
    </div>
  </form>
</template>
<script setup lang="ts">
import type { IShip } from "~/types/ship";
import { ships, addShip } from "~/types/state";

const form = ref<IShip>({
  id: 0,
  name: "",
  loads: "",
  origin: "",
  destination: "",
});
const handleAddShip = () => {
  addShip({
    id: Math.random() * 5000,
    name: form.value.name,
    loads: form.value.loads,
    origin: form.value.origin,
    destination: form.value.destination,
  });
  form.value = {
    id: 0,
    name: "",
    loads: "",
    origin: "",
    destination: "",
  };
};
</script>
