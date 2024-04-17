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
        icon-color="text-pink-500"
        color="secondary"
        :icon="fas('heart')"
        icon-size="xl"
        icon-bounce
        circle
        outline
      />
      <XSpace />
      <XButton
        class="mr-2 text-red-500"
        label="취소"
        color="warning"
        :icon="fas('cancel')"
      />
      <XButton
        class="text-green-500"
        label="확인"
        color="neutral"
        icon-color="text-green-500"
        :icon="fas('check')"
      />
    </div>
  </article>
</template>

<style lang="scss">
body {
  // font-family: "milkyway";
  font-family: "suite";
}
</style>
