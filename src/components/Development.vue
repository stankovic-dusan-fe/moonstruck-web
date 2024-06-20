<template>
  <div class="development-cards">
    <DevelopmentCard
      icon="protocol-icon"
      title="Protocol Dev>"
      desc="Consensus development / Protocol definition"
    />
    <DevelopmentCard
      icon="dapp-dev-icon"
      title="Dapp Dev>"
      desc="Full stack solution development / Web3 Integration / System Architecture"
    />
    <DevelopmentCard
      icon="defi-dev-icon"
      title="Defi Dev>"
      desc="Token Mechanics and Algorithms / Product Shaping / Tokenomics"
    />
    <DevelopmentCard
      icon="contract-dev-icon"
      title="Smart Contract Dev> & Audits"
      desc="Technical Documentation / Testing and QA / Security audit"
    />
  </div>
</template>

<script setup>
import DevelopmentCard from "../components/DevelopmentCard.vue";
</script>

<style lang="scss" scoped>
.development-cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
</style>
