<template>
  <form action="" class="bg-gray-50 w-96 p-4 rounded-lg">
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Nama Kapal</label>
      <div class="mt-2">
        <input
          v-model="form.name"
          type="text"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Muatan Kapal</label>
      <div class="mt-2">
        <input
          v-model="form.loads"
          type="text"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Asal Kapal</label>
      <div class="mt-2">
        <input
          v-model="form.origin"
          type="text"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div class="col-span-full">
      <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Tujuan Kapal</label>
      <div class="mt-2">
        <input
          v-model="form.destination"
          type="text"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div class="mt-2 flex justify-center">
      <ButtonUpdate @click="handleUpdate" />
    </div>
  </form>
</template>
<script setup lang="ts">
import type { IShip } from "~/types/ship";
import { ships, updateShip } from "~/types/state";
const route = useRoute();
const form = ref<IShip>(ships.find((item) => item.id == +route.params.id) as IShip);

const handleUpdate = () => {
  console.log(form.value);
  updateShip(form.value);

  form.value = {
    id: 0,
    name: "",
    loads: "",
    origin: "",
    destination: "",
  };
};
</script>
