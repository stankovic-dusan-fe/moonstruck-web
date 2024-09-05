<template>
  <Carousel :breakpoints="breakpoints">
    <Slide
      v-for="project in projects"
      :key="project"
    >
      <div class="carousel__item">
        <div class="project-img">
          <img
            :src="`/images/logos/${project.img}`"
            alt="project-logo"
          />
        </div>
        <div class="project-info">
          <div class="project-bio">
            <span>Bio:</span>
            <p>{{ project.bio }}</p>
          </div>
          <div
            class="project-scope"
            v-if="project.scope"
          >
            <span>Scope:</span>
            <p>{{ project.scope }}</p>
          </div>
          <div
            class="project-tech"
            v-if="project.tech"
          >
            <span>Tech:</span>
            <p>{{ project.tech }}</p>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { ref } from "vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const projects = ref([
  {
    name: "Swarm",
    bio: "Decentralised storage and communication service by Ethereum Foundation",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity",
    img: "swarm-logo.png",
  },
  {
    name: "Bitcoin.com",
    bio: "AMM DEX Platform",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity, Golang",
    img: "bitcoin-com-logo.png",
  },
  {
    name: "Traken",
    bio: "Smartgrid energy management platform",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity, NodeJS, React",
    img: "traken-logo.png",
  },
  {
    name: "Defire",
    bio: "DEX Aggregation Platform for Transaction Optimization for Cardano",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity, NodeJS, React",
    img: "defire-logo.png",
  },
  {
    name: "Renfter",
    bio: "Uncollateralized NFT Renting Protocol",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity, NodeJS, React",
    img: "renfter-logo.png",
  },
  {
    name: "Disberse",
    bio: "Financing Platform for Public Funding and Donations",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "Solidity, NodeJS, React",
    img: "disberse-logo.png",
  },
  {
    name: "GreenPower",
    bio: "MLM Reward Platform and Cryptocurrency",
    scope: "Blockchain consulting and security implementation",
    tech: "",
    img: "green-power-logo.png",
  },
  {
    name: "TAG IT",
    bio: "Smart Tags driven service platform for enabling ecosystems of connected objects. Funded by European Union's Horizon 2020 Research and Innovation Programme.",
    scope: "",
    tech: "",
    img: "tagit-logo.png",
  },
  {
    name: "AgAu.io",
    bio: "Peer-to-Peer Electronic Money System and Cryptocurrency",
    scope: "Blockchain architecture planning and software development services",
    tech: "",
    img: "agau-logo.png",
  },
  {
    name: "Tycoon",
    bio: "Social Crypto Trading Platform and Cryptocurrency",
    scope: "Blockchain architecture, software development and technical consulting services",
    tech: "",
    img: "tycoon-logo.png",
  },
  {
    name: "Libertas",
    bio: "Development on infrastructure and protocol layer 1 for TSF blockchain",
    scope: "",
    tech: "Geth, Golang",
    img: "libertas-logo.png",
  },
  {
    name: "Blockchain reactor",
    bio: "Consulting and ideatian workshops",
    scope: "",
    tech: "",
    img: "blockchain-reactor-logo.png",
  },
  {
    name: "MIDIH",
    bio: "Manufacturing Industry Digital Innovation Hubs. Funded by European Union's Horizon 2020 Research and Innovation Programme",
    scope: "",
    tech: "",
    img: "midih-logo.png",
  },
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

const breakpoints = ref({
  0: {
    itemsToShow: 1,
  },

  480: {
    itemsToShow: 1.5,
  },
  960: {
    itemsToShow: 2,
  },

  1440: {
    itemsToShow: 3,
  },

  1920: {
    itemsToShow: 4,
  },

  2400: {
    itemsToShow: 5.5,
  },
});
</script>

<style scoped lang="scss">
.carousel__item {
  width: calc(100% - 24px);
  max-width: 456px;
  min-height: 400px;
  background-color: white;
  border-radius: 16px;
  color: black;
  padding: 24px;
  text-align: left;

  .project-img {
    width: 100%;
    height: 52px;

    display: flex;
    justify-content: start;
    padding: 6px 0;
    margin-bottom: 24px;

    img {
      width: auto;
      height: 100%;
    }
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .project-bio,
  .project-scope,
  .project-tech {
    display: flex;
    gap: 16px;

    span {
      display: block;
      min-width: 80px;
    }

    p {
      font-family: "Space Grotesk", sans-serif;

      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
      color: #6a6a6a;
    }
  }
}

@media screen and (max-width: 480px) {
  .carousel__item {
    width: calc(100% - 8px);
    min-height: 500px;

    .project-bio,
    .project-scope,
    .project-tech {
      display: flex;
      flex-direction: column;
      gap: 16px;

      span,
      p {
        font-size: 16px;
      }
    }

    .project-img {
      img {
        width: auto;
        height: 80%;
      }
    }
  }
  .carousel__pagination {
    background-color: #fd5001;
  }
}
</style>
