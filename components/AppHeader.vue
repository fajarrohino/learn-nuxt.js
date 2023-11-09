<template>
  <div class="flex justify-between w-full bg-cyan-900 text-white p-5">
    <div>
      <a href="#">Nuxt</a>
    </div>
    <div class="flex gap-5">
      <NuxtLink to="/"> Home</NuxtLink>
      <NuxtLink to="about"> About</NuxtLink>
      <NuxtLink to="profile"> Profile</NuxtLink>
    </div>
    <div class="flex gap-5">
      <a href="">Register</a>
      <a href="">Login</a>
    </div>
  </div>
</template>
