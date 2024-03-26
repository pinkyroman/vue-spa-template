<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { faApplePay } from "@fortawesome/free-brands-svg-icons";

const { t, locale } = useI18n();
locale.value = "ko";
</script>

<i18n lang="yaml">
ko:
  message: 안녕하세요!

en:
  message: XCard is here!
</i18n>

<template>
  <div class="flex items-center">
    <font-awesome-icon :icon="faApplePay" size="3x" />
    <span class="ml-2 text-3xl">
      {{ t("message") }}
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
