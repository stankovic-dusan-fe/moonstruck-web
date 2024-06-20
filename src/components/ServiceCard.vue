<template>
  <div class="service-card">
    <div class="service-info">
      <div class="service-title">
        <h3>{{ title }}</h3>
        <h1>{{ count }}</h1>
      </div>
      <p>{{ desc }}</p>
    </div>
    <div class="service-icon">
      <img
        :src="`/images/icons/services/${icon}.svg`"
        alt="service-icon"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "count", "desc", "icon"]);
</script>

<style lang="scss" scoped>
.service-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 170px;

  .service-info {
    width: 576px;

    .service-title {
      display: flex;
      align-items: flex-end;

      h3 {
        color: #fd5001;
      }

      h1 {
        position: absolute;
        line-height: 200px;
        z-index: -2;
        margin-left: 240px;
      }
    }

    p {
      margin-top: 32px;
    }
  }
}
</style>
