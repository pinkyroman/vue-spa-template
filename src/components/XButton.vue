<script setup lang="ts">
import { XButtonProps } from "../types";

const props = withDefaults(defineProps<XButtonProps>(), {
  wide: false,
});

const classes = computed(() => ({ 'btn': true, [`btn-${props.color}`]: !!props.color, 'btn-wide': props.wide }));
// const classes = reactive({ 'btn': true, [`btn-${props.color}`]: !!props.color, 'btn-wide': props.wide });

watch(() => classes.value, (newVal) => {
  console.log('classes: ', JSON.stringify(newVal, null, 2));
})

// const classes = computed(() => {
//   const c = { 'btn': true, [`btn-${props.color}`]: !!props.color, 'btn-wide': props.wide };
//   console.log('classes: ', JSON.stringify(c, null, 2));
//   return c;
// });

console.log('props: ', JSON.stringify(props, null, 2));
console.log('!!props.color: ', !!props.color);
</script>

<template>
  <!-- <button :class="classes"> -->
  <button class="btn btn-accent btn-wide">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
