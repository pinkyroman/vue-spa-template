<script setup lang="ts">
import { XButtonProps } from "../types/component-props";

const props = withDefaults(defineProps<XButtonProps>(), {});

const btnClass = computed(() => [
  "btn",
  {
    "btn-neutral": props.color === "neutral",
    "neutral-content": props.color === "neutral",
    "btn-primary": props.color === "primary",
    "primary-content": props.color === "primary",
    "btn-secondary": props.color === "secondary",
    "secondary-content": props.color === "secondary",
    "btn-accent": props.color === "accent",
    "accent-content": props.color === "accent",
    "btn-info": props.color === "info",
    "info-content": props.color === "info",
    "btn-success": props.color === "success",
    "success-content": props.color === "success",
    "btn-warning": props.color === "warning",
    "warning-content": props.color === "warning",
    "btn-error": props.color === "error",
    "error-content": props.color === "error",
    "btn-ghost": props.ghost,
    "btn-link": props.link,
    "btn-outline": props.outline,
    "btn-active": props.active,
    "btn-disabled": props.disabled,
    glass: props.glass,
    "no-animation": props.noAnimation,
    "btn-lg": props.size === "lg",
    "btn-md": props.size === "md",
    "btn-sm": props.size === "sm",
    "btn-xs": props.size === "xs",
    "btn-wide": props.wide,
    "btn-block": props.block,
    "btn-circle": props.circle,
    "btn-square": props.square,
  },
]);
</script>

<template>
  <button :class="btnClass">
    <FontAwesomeIcon
      v-if="!!icon"
      :class="iconColor"
      :icon="icon"
      :size="iconSize"
      :beat="iconBeat"
      :beat-fade="iconBeatFade"
      :bounce="iconBounce"
      :fade="iconFade"
      :flip="iconFlip"
      :shake="iconShake"
      :spin="iconSpin || iconSpinReverse"
      :spin-reverse="iconSpinReverse"
      :spin-pulse="iconSpinPulse"
      fixed-width
    />
    <slot>
      {{ props.label }}
    </slot>
  </button>
</template>
