<template>
  <div class="development-card">
    <img
      :src="`/images/icons/${icon}.svg`"
      alt="protocol-icon"
    />
    <h6>{{ title }}></h6>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["icon", "title", "desc"]);
</script>

<style lang="scss" scoped>
.development-card {
  width: 356px;
  height: fit-content;
  background-color: rgba(37, 31, 33, 0.5);
  padding: 24px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;

  img {
    width: 64px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
