<template>
  <div class="maxwidth-container hero-section">
    <div class="hero-text">
      <p>On a mission</p>
      <h2>Moonstruck</h2>
      <div class="section-list">
        <p id="loading">LOADING ...</p>
        <ul class="section-list-items">
          <li class="section-list-item">
            <Typewriter
              text="[Development].....READY"
              delay="2000"
            />
          </li>
          <li class="section-list-item">
            <Typewriter
              text="[WHAT WE DO]......READY"
              delay="3500"
            />
          </li>
          <li class="section-list-item">
            <Typewriter
              text="[PROJECTS]........READY"
              delay="5000"
            />
          </li>
          <li class="section-list-item">
            <Typewriter
              text="[CONTACT].........READY"
              delay="6500"
            />
          </li>
        </ul>
        <a href="#development-section"><p id="scroll">&lt;SCROLL TO START&gt;</p></a>
      </div>
    </div>
    <div class="hero-image">
      <img
        src="/images/moonstcuck-hero.png"
        alt="moonstcuck-hero"
      />
      <h6>SIMPLY FUNCTIONAL</h6>
      <p>Taking on the challenges and complexity of your idea, we simplify your equation and make it work, simply, functional.</p>
    </div>
  </div>

  <div
    class="maxwidth-container fullscreen-container development-section"
    id="development-section"
  >
    <div class="development-info">
      <h4>BLOCKCHAIN DEVELOPMENT</h4>
      <p>We provide full cycle software development, from ideation and maintenance, with a primary focus on Web 3.0. We can deliver new products and assist you in the re-engineering and upgrading existing products or services base on your needs.</p>
    </div>
    <div class="development-cards"><Development /></div>
    <img
      src="/images/mooon-background.png"
      alt="moonstcuck-hero"
    />
  </div>

  <div class="maxwidth-container services-section">
    <Services />
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import Development from "../components/Development.vue";
import Services from "../components/Services.vue";
import Projects from "../components/Projects.vue";

import Typewriter from "../components/Typewriter.vue";
</script>

<style lang="scss" scoped>
.fullscreen-container {
  height: 100vh;
}

.maxwidth-container {
  max-width: 1440px;
  margin: 0px auto;
}

.hero-section {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hero-text {
    width: 50%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      font-size: 120px;
    }

    p {
      text-transform: uppercase;
    }

    a {
      text-decoration: none;
      color: #ffffff;
    }

    .section-list {
      display: flex;
      flex-direction: column;
      gap: 24px;

      p {
        font-size: 16px;
      }

      ul {
        list-style-type: none;
      }

      #loading {
        animation: blink 1s step-start 2;
      }

      .section-list-items {
        visibility: visible;
      }

      @keyframes revealList {
        to {
          visibility: visible;
        }
      }

      #scroll {
        visibility: hidden;
        animation: revealList 1s forwards;
        animation-delay: 8s;
      }

      @keyframes blink {
        0%,
        50% {
          visibility: hidden;
        }
        25%,
        75%,
        100% {
          visibility: visible;
        }
      }
    }
  }

  .hero-image {
    width: 50%;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;

    img {
      width: 100%;
    }
  }
}

.development-section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .development-info {
    width: 456px;

    p {
      color: #888888;
      font-size: 16px;
      line-height: 24px;
      margin-top: 32px;
    }
  }

  img {
    width: 900px;
    position: absolute;
    right: 50px;
    z-index: -1;
  }
}

.projects-section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1440px) {
  .maxwidth-container {
    padding: 0 50px;
  }

  .hero-section {
    .hero-image {
      gap: 0px;

      h6 {
        font-size: 24px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .development-section {
    img {
      display: none;
      width: 600px;
      right: -100px;
    }
  }
}
</style>
