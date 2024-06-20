<template>
  <Splide :options="options">
    <SplideSlide class="project-cards-slider">
      <ProjcetCard
        v-for="project in projects"
        :key="project.name"
        :name="project.name"
        :bio="project.bio"
        :scope="project.scope"
        :tech="project.tech"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { ref } from "vue";

import { Splide, SplideSlide } from "@splidejs/vue-splide";

import ProjcetCard from "../components/ProjectCard.vue";

const options = {};

const projects = ref([
  {
    name: "Swarm",
    bio: "Decentralised storage and communication service by Ethereum Foundation",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity",
  },
  {
    name: "Swarm",
    bio: "Decentralised storage and communication service by Ethereum Foundation",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity",
  },
  {
    name: "Swarm",
    bio: "Decentralised storage and communication service by Ethereum Foundation",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity",
  },
]);
</script>

<style lang="scss" scoped>
.project-cards-slider {
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
</style>
