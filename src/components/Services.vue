<template>
  <ServiceCard
    v-for="(service, index) in services"
    :key="index"
    :count="`0${index + 1}`"
    :title="service.title"
    :desc="service.desc"
    :icon="service.icon"
  />
</template>

<script setup>
import ServiceCard from "../components/ServiceCard.vue";

const services = [
  {
    title: "Audit",
    desc: "By assessing the project's volume, complexity and viability, as well as its system architecture and technology stack, we are able to offer insight into its overall functioning and quality. We conduct code audits to make sure that the software is developed in accordance with the highest technical standards.",
    icon: "audit-icon",
  },
  {
    title: "Design",
    desc: "We can assist you in applying structured reasoning and validating your concepts by providing ideation and product design workshops to help you build your idea from scratch,or improve an existing product or service.",
    icon: "design-icon",
  },
  {
    title: "Develop",
    desc: "We provide full-stack custom software development, including UI/UX design, as well as support and maintenance. Upon request, we provide new products, assist you in re-engineering and upgrading your current solutions, or make it easier to integrate with other systems.",
    icon: "develop-icon",
  },
  {
    title: "Support",
    desc: "Once product development is finalized, we can offer support, ensuring that the software continues to operate at a high level. Based on your needs, we provide periodic spot checks or dedicated maintenance with support teams.",
    icon: "support-icon",
  },
];
</script>
