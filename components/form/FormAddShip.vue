<template>
  <form class="bg-gray-50 w-1/3 p-5 rounded-lg font-poppins shadow flex-wrap">
    <h6 class="text-xl font-semibold pb-3 w-full">Tambah Kapal</h6>
    <div class="col-span-full">
      <label class="block text-sm font-medium leading-6 text-gray-900">Nama Kapal</label>
      <div class="mt-2">
        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.name" />
      </div>
    </div>
    <div class="col-span-full">
      <label class="block text-sm font-medium leading-6 text-gray-900">Muatan Kapal</label>
      <div class="mt-2">
        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.loads" />
      </div>
    </div>
    <div class="col-span-full">
      <label class="block text-sm font-medium leading-6 text-gray-900">Asal Kapal</label>
      <div class="mt-2">
        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.origin" />
      </div>
    </div>
    <div class="col-span-full">
      <label class="block text-sm font-medium leading-6 text-gray-900">Tujuan Kapal</label>
      <div class="mt-2">
        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.destination" />
      </div>
    </div>
    <div class="mt-5 flex justify-center">
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
