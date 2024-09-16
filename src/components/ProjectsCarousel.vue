<template>
  <Carousel :itemsToShow="itemsToShow">
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
  </Carousel>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { Carousel, Slide } from "vue3-carousel";

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

const screenWidth = ref(window.innerWidth);

function updateScreenWidth() {
  screenWidth.value = window.innerWidth;
}

const itemsToShow = computed(() => {
  if (screenWidth.value > 480) {
    return Math.floor((screenWidth.value / 456) * 10) / 10;
  } else return 1.07;
});

onMounted(() => {
  window.addEventListener("resize", updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenWidth);
});

console.log(screenWidth.value);
</script>

<style scoped lang="scss">
.carousel {
  cursor: grab;

  .carousel__item {
    width: calc(100% - 16px);
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
        width: 50%;
        object-fit: contain;
        object-position: 0%;
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
}

@media screen and (max-width: 768px) {
  .carousel {
    .carousel__item {
      width: calc(100% - 8px);
      height: 520px;

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
        width: 100%;
        height: 48px;
      }
    }
  }
}
</style>
