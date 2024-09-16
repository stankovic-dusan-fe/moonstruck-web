<template>
  <div class="modules-card">
    <h6>{{ title }}</h6>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["title", "desc"]);
</script>

<style lang="scss" scoped>
.modules-card {
  max-width: 454px;
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

@media screen and (max-width: 1216px) {
  .modules-card {
    height: auto;
    justify-content: flex-start;
  }
}

@media screen and (max-width: 768px) {
  .modules-card {
    max-width: 100%;

    h6 {
      font-size: 24px;
      line-height: 32px;
    }
  }
}
</style>
