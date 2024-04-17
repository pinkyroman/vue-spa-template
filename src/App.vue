<script setup lang="ts">
import XSpace from "./components/XSpace.vue";
import XButton from "./components/XButton.vue";

document.documentElement.setAttribute("data-theme", "dracula");

const { fas, fab, far } = useFontAwesomeFree();

/* [TODO]
  스토리북 .. 테마 동기화 하는 법 ...
*/
</script>

<template>
  <article class="prose">
    <div>Welcome to Vite + Vue 3 + TypeScript</div>
    <div class="flex justify-center">
      <XButton
        class="text-red-500"
        color="accent"
        :icon="fas('gear')"
        icon-size="xl"
        icon-beat-fade
        label="설정"
      />
      <XSpace />
      <XButton class="mr-2 text-red-500" color="warning" :icon="fas('cancel')"
        >취소</XButton
      >
      <XButton class="text-gray-100" color="primary" :icon="fas('check')"
        >확인</XButton
      >
    </div>
  </article>
</template>

<style lang="scss">
body {
  // font-family: "milkyway";
  font-family: "suite";
}
</style>
