<template>
  <div class="flex justify-evenly w-full bg-orange-500 text-white p-5 font-poppins">
    <div>
      <NuxtLink to="/ship" class="font-bold text-md text-xl hover:underline"> S H I P S</NuxtLink>
    </div>
    <!-- <div class="flex gap-5">
      <NuxtLink to="/"> Home</NuxtLink>
      <NuxtLink to="about"> About</NuxtLink>
      <NuxtLink to="profile"> Profile</NuxtLink>
    </div> -->
    <div class="flex gap-5">
      <NuxtLink to="/ship/add" class="font-bold text-md hover:underline"> Add Ships</NuxtLink>
      <!-- <a href="">Login</a> -->
    </div>
  </div>
</template>
