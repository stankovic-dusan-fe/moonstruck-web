<template>
  <div class="development-card">
    <img
      :src="`/images/icons/${icon}.svg`"
      alt="protocol-icon"
    />
    <h6>{{ title }}</h6>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["icon", "title", "desc"]);
</script>

<style lang="scss" scoped>
.development-card {
  max-width: 336px;
  padding: 24px;
  height: fit-content;
  box-sizing: border-box;
  background-color: rgba(37, 31, 33, 0.5);
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

@media screen and (max-width: 480px) {
  .development-card {
    max-width: 100%;

    h6 {
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>
