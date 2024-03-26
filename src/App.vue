<script lang="ts" setup>
import XCard from "./components/XCard.vue";
</script>

<template>
  <div class="px-auto mx-auto my-auto bg-slate-50 py-8 text-center">
    Wait a moment ...
  </div>
  <div class="columns-2">
    <p>Well, let me tell you something, ...</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ipsa
      sapiente eaque unde ex, laborum sequi ad nemo consequuntur ratione odio
      quibusdam iusto obcaecati iure voluptas natus, eum fuga tempore!
    </p>
    <p class="break-after-column">Sure, go ahead, laugh...</p>
    <!-- <p>Sure, go ahead, laugh...</p> -->
    <p>Maybe we can live without...</p>
    <p class="font-thin">Look. If you think this is... 아주 가는 글씨체</p>
    <p class="font-extralight">
      Look. If you think this is... 조금 가는 글씨체
    </p>
    <p class="font-light">Look. If you think this is...가는 글씨체</p>
    <p class="font-normal">Look. If you think this is...보통 글씨체</p>
    <p class="font-medium">Look. If you think this is... 중간 글씨체</p>
    <p class="font-semibold">Look. If you think this is... 조금 굵은 글씨체</p>
    <p class="font-bold">Look. If you think this is... 굵은 글씨체</p>
    <p class="font-extrabold">Look. If you think this is...아주 굵은 글씨체</p>
    <p class="font-black">Look. If you think this is...겁네 굵은 글씨체</p>
  </div>
  <div class="text-8xl font-extrabold">
    <span
      class="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent hover:bg-gradient-to-l hover:from-blue-800 hover:to-indigo-400"
    >
      Hello world
    </span>
  </div>
  <div>
    <XCard />
  </div>
</template>

<style lang="scss">
body {
  font-family: "suite";
}
</style>
