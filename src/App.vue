<script setup lang="ts">
import XButton  from './components/XButton.vue';

document.documentElement.setAttribute("data-theme", "light");
</script>

<template>
  <article class="prose">
    <div>Welcome to Vite + Vue 3 + TypeScript</div>
    <div class="flex justify-center">
      <XButton color="accent" >버튼</XButton>
    </div>
  </article>
</template>

<style lang="scss">
body {
  font-family: "milkyway";
}
</style>
