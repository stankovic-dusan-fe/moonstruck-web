<template>
  <div class="maxwidth-container nav-bar">
    <nav
      class="navbar"
      :class="{ active: menuActive }"
    >
      <div
        class="menu-btn"
        :class="{ active: menuActive }"
        @click="toggleMenu"
      >
        <p v-if="!menuActive">Menu</p>
        <p v-if="menuActive">X</p>
      </div>
      <ul
        class="nav-list"
        :class="{ active: menuActive }"
      >
        <div class="menu-text">
          <span @click="toggleMenu">MENU</span>
          <span>...</span>
        </div>
        <li
          class="nav-item"
          :class="{ active: activeLink === 'home-section' }"
          @click="scrollToClass('hom-section')"
        >
          START
        </li>
        <li
          class="nav-item"
          :class="{ active: activeLink === 'development-section' }"
          @click="scrollToClass('development-section')"
        >
          TECHNOLOGY
        </li>
        <li
          class="nav-item"
          :class="{ active: activeLink === 'services-section' }"
          @click="scrollToClass('services-section')"
        >
          WHAT WE DO
        </li>

        <li
          class="nav-item"
          :class="{ active: activeLink === 'projects-section' }"
          @click="scrollToClass('projects-section')"
        >
          PROJECTS
        </li>

        <li class="nav-item"><RouterLink to="/web2.5academy">WEB 2.5</RouterLink></li>
        <li
          class="nav-item"
          :class="{ active: activeLink === 'contact-section' }"
          @click="scrollToClass('contact-section')"
        >
          CONTACT
        </li>
      </ul>
    </nav>
  </div>
  <div class="maxwidth-container fullscreen-container hero-section">
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
        <p
          id="scroll"
          @click="scrollToClass('development-section')"
        >
          &lt;SCROLL TO START&gt;
        </p>
      </div>
    </div>
    <div class="hero-image"></div>
    <div class="hero-image-text">
      <h6>SIMPLY FUNCTIONAL</h6>
      <p>Taking on the challenges and complexity of your idea, we simplify your equation and make it work, simply, functional.</p>
    </div>
  </div>

  <div class="maxwidth-container fullscreen-container development-section">
    <div class="development-info">
      <h4>BLOCKCHAIN DEVELOPMENT</h4>
      <p>We provide full cycle software development, from ideation and maintenance, with a primary focus on Web 3.0. We can deliver new products and assist you in the re-engineering and upgrading existing products or services base on your needs.</p>
    </div>
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
  </div>

  <div class="maxwidth-container services-section">
    <div class="services-info">
      <div class="title">
        <h3>WHAT DO WE DO?</h3>
      </div>

      <div class="info">
        <p>Our team is structured with a wide spectrum of engineering roles and experience levels, so that we can cover very diversified and broad project scopes.</p>
        <p>Thus, we can offer development services for several project segments and our engagement can dynamically shift as the project starts advancing.</p>
      </div>
    </div>
    <Services />
  </div>

  <div class="projects-section">
    <div class="maxwidth-container">
      <h3>[PROJECTS]</h3>
    </div>
    <ProjectsCarousel />
  </div>

  <div class="contact-section">
    <Contact />
  </div>
</template>

<script setup>
import { ref } from "vue";

import DevelopmentCard from "@/components/DevelopmentCard.vue";
import Services from "../components/Services.vue";
import Typewriter from "../components/Typewriter.vue";
import ProjectsCarousel from "@/components/ProjectsCarousel.vue";
import Contact from "@/components/Contact.vue";

const menuActive = ref(false);
const activeLink = ref("home-section");

const toggleMenu = () => {
  menuActive.value = !menuActive.value;
};

const scrollToClass = (className) => {
  const element = document.querySelector("." + className);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  menuActive.value = false;
  activeLink.value = className;
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  margin-top: 32px;

  .menu-btn {
    display: none;
  }

  .nav-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .menu-text {
      display: none;
    }

    li {
      font-size: 16px;
    }
  }

  .nav-item {
    color: #fff;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;

    a {
      font-size: 16px;
      line-height: 24px;
      font-weight: normal;
      font-family: "Space Mono", monospace;
    }

    &::after {
      content: "*";
      color: #fff;
      margin: 0 8px;
    }

    &:last-child::after {
      content: none;
    }

    &.active {
      color: #fd5001;
      font-weight: bold;
    }
  }
}

.hero-section {
  display: flex;
  justify-content: start;
  align-items: center;

  .hero-text {
    display: flex;
    min-height: 425px;
    width: auto;
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
    position: absolute;
    height: 100%;
    width: 50vw;
    right: 0;
    top: 0;
    z-index: -1;
    background-image: url("/images/moonstcuck-hero-2.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hero-image-text {
    position: absolute;
    width: 50vw;
    background-color: black;
    right: 0;
    bottom: 0;
  }
}

.development-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .development-info {
    max-width: 456px;

    p {
      color: #888888;
      font-size: 16px;
      line-height: 24px;
      margin-top: 32px;
    }
  }

  .development-cards {
    width: 700px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  img {
    width: 900px;
    position: absolute;
    right: 50px;
    z-index: -1;
  }
}

.services-section {
  padding-top: 100px;

  .services-info {
    display: flex;
    justify-content: flex-end;

    .title {
      max-width: 456px;
    }

    .info {
      margin-left: 144px;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p {
        font-size: 18px;
        color: #888888;
        line-height: 24px;
        font-weight: lighter;
      }
    }
  }
}

.projects-section {
  padding-top: 100px;

  .maxwidth-container {
    h3 {
      margin-bottom: 60px;
    }
  }
}

.contact-section {
  height: 610px;
  justify-content: start;
  align-items: start;
  position: relative;
  padding-top: 200px;
}

@media screen and (max-width: 1440px) {
  .navbar {
    .nav-list {
      li {
        font-size: 16px;
      }
    }
  }

  .hero-section {
    .hero-image-text {
      h6 {
        font-size: 24px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .development-section {
    margin: 100px 0;
  }
}

@media screen and (max-width: 1216px) {
  .nav-bar {
    padding: 0;
    width: 100%;
    height: auto;
    position: absolute;

    .navbar {
      width: 100%;
      background-color: black;
      margin: 0;

      .menu-btn {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        width: 72px;
        height: 56px;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        p {
          font-size: 16px;
          text-transform: uppercase;
        }
      }

      .nav-list {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 16px;
        display: none;

        .menu-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          display: none;

          span {
            font-size: 16px;
            line-height: 24px;
            color: #fff;
          }
        }
      }
      .nav-list.active {
        display: flex;
      }

      .nav-item {
        &::after {
          display: none;
        }
      }
    }

    .navbar.active {
      height: 56px;
    }
  }

  .hero-section {
    .hero-text {
      h2 {
        font-size: 100px;
      }
    }
    .hero-image-text {
      width: calc(100% - 16px);

      p {
        font-size: 14px; /// PROVERI DA LI OVO IMA SMISLA NA KRAJU
      }
    }
  }

  .development-section {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .development-info {
      max-width: 100%;
      justify-content: center;
      align-items: center;
      gap: 32px;

      p {
        margin: 32px 0;
      }
    }
    .development-cards {
      display: flex;

      justify-content: center;
      width: 100%;
      margin-top: 32px;
    }
  }

  .services-section {
    padding-top: 0;
    .services-info {
      flex-direction: column;
      .title {
        max-width: 100%;
      }
      .info {
        margin-left: 0;
        margin-top: 32px;

        width: 100%;
        p {
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .nav-bar {
    .navbar {
      .nav-list {
        flex-direction: column;

        .menu-text {
          display: flex;
        }
      }
    }

    .navbar.active {
      height: 400px;
    }
  }

  .hero-section {
    flex-direction: column;
    height: auto;

    .hero-text {
      width: 100%;
      min-height: 50vh;
      margin-top: 24px;
      order: 2;

      h2 {
        font-size: 48px;
        line-height: 64px;
      }
    }

    .hero-image {
      width: 100vw;
      position: relative;
      height: 40vh;
    }

    .hero-image-text {
      width: 100%;
      position: relative;
      margin-bottom: 100px;
      order: 3;

      h6 {
        margin-bottom: 20px;
      }
    }
  }

  .development-section {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    .development-info {
      width: 100%;

      p {
        margin: 32px 0;
      }
    }

    .development-cards {
      width: 100%;
    }
  }

  .services-section {
    .services-info {
      flex-direction: column;
      justify-content: flex-start;
      .title {
        width: 100%;
        max-width: auto;
      }
      .info {
        margin-left: 0;
        margin-top: 24px;
        width: 100%;
        gap: 24px;
      }
    }
  }

  .projects-section {
    padding: 0 16px;
    height: auto;
    .maxwidth-container {
      margin-top: 90px;

      h3 {
        margin-bottom: 24px;
      }
    }
  }

  .contact-section {
    width: auto;
    height: 624px;
    margin-top: 100px;
    padding: 0;

    h3 {
      font-size: 64px;
    }
  }
}
</style>
