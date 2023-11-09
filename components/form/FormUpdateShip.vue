<template>
  <form class="bg-gray-50 w-1/3 p-5 rounded-lg font-poppins shadow">
    <h6 class="text-xl font-semibold pb-3">Update Kapal {{ form.name }}</h6>
    <div class="flex flex-col">
      <label class="block text-sm font-medium leading-6 text-gray-900">Nama Kapal</label>
      <div class="mt-2">
        <input v-model="form.name" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
    </div>
    <div class="flex flex-col">
      <label class="block text-sm font-medium leading-6 text-gray-900">Muatan Kapal</label>
      <div class="mt-2">
        <input v-model="form.loads" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
    </div>
    <div class="flex flex-col">
      <label class="block text-sm font-medium leading-6 text-gray-900">Asal Kapal</label>
      <div class="mt-2">
        <input v-model="form.origin" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
    </div>
    <div class="flex flex-col">
      <label class="block text-sm font-medium leading-6 text-gray-900">Tujuan Kapal</label>
      <div class="mt-2">
        <input v-model="form.destination" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
