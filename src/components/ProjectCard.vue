<template>
  <div class="project-card">
    <div class="logo">
      <img
        src="/images/logos/swarm-logo.png"
        alt="logo"
      />
    </div>
    <div class="card-info">
      <div class="info">
        <span>Name:</span>
        <p id="company-name">{{ name }}</p>
      </div>
      <div class="info">
        <span>Bio:</span>
        <p>{{ bio }}</p>
      </div>
      <div class="info">
        <span>Scope:</span>
        <p>{{ scope }}</p>
      </div>
      <div class="info">
        <span>Tech:</span>
        <p>{{ tech }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["name", "bio", "scope", "logo", "tech"]);
</script>

<style lang="scss" scoped>
.project-card {
  max-width: 33%;
  padding: 24px;
  color: #6a6a6a;
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .logo {
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .card-info {
    display: flex;
    flex-direction: column;

    gap: 16px;
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    span,
    p {
      display: flex;
      align-items: center;
    }

    #company-name {
      color: #fd5001;
    }

    span {
      min-width: 80px;
    }
  }
}
</style>
