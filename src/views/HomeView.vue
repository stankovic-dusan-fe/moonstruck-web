<template>
  <div class="fullscreen-container hero-section maxwidth-container">
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
    <div class="hero-image"></div>
    <div class="hero-image-text">
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
    <div class="contact-info maxwidth-container">
      <h6>TAKE A ‘ONE SMALL STEP’</h6>
      <h3>info@moonstruck.com</h3>
      <div class="contact-link">
        <a
          href="https://www.linkedin.com/company/moonstruck/"
          target="_blank"
          >LINKEDIN</a
        >
        <a
          href="https://www.linkedin.com/company/moonstruck/"
          target="_blank"
          ><s>TWITTER</s> X</a
        >
      </div>
      <div class="company-info">
        <p>
          Moonstruck d.o.o. <br />
          Vojvode stepe 147, 11080 <br />Belgrade Serbia <br />
          VAT: 107273050
        </p>
      </div>
      <div class="contact-img">
        <img
          src="/images/contact-background.png"
          alt="contact-background"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import DevelopmentCard from "@/components/DevelopmentCard.vue";
import Services from "../components/Services.vue";
import Typewriter from "../components/Typewriter.vue";
import ProjectsCarousel from "@/components/ProjectsCarousel.vue";
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
  .maxwidth-container {
    margin-top: 224px;

    h3 {
      margin-bottom: 60px;
    }
  }
}

.contact-section {
  height: 610px;
  justify-content: start;
  align-items: start;
  margin-top: 200px;
  position: relative;

  .contact-info {
    h3 {
      text-transform: lowercase;
      margin: 32px 0;
    }
  }

  .contact-link {
    display: flex;
    gap: 32px;

    a {
      text-decoration: none;
      color: white;
    }
  }
  .company-info {
    margin-top: 134px;

    p {
      color: #6a6a6a;
      font-size: 20px;
      font-weight: normal;
    }
  }
  .contact-img {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;

    img {
      filter: contrast(110%);
    }
  }
}

@media screen and (max-width: 1440px) {
  .maxwidth-container {
    padding: 0 50px;
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
    .development-section {
      display: none;
      width: 600px;
      right: -100px;
    }
  }

  .contact-section {
    .contact-img {
      height: 610px;
      display: flex;
      justify-content: end;
      align-items: end;
      z-index: -1;
      img {
        width: 80%;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .maxwidth-container {
    padding: 0 16px;
  }

  .hero-section {
    flex-direction: column;
    height: auto;

    .hero-text {
      width: 100%;
      min-height: 50vh;
      margin-top: 24px;
      order: 2;

      p {
        font-size: 16px;
        line-height: 24px;
      }

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
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 20px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
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

      h4 {
        font-size: 42px;
        line-height: 48px;
      }

      p {
        margin: 32px 0;
        font-size: 16;
        line-height: 24px;
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

        margin-top: 100px;
        max-width: auto;
      }
      .info {
        margin-left: 0;
        margin-top: 24px;
        width: 100%;
        gap: 24px;

        p {
          font-size: 16px;
          line-height: 24px;
        }
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

    .contact-info {
      h6 {
        width: 100%;
        font-size: 24px;
      }

      h3 {
        width: auto;
        font-size: 28px;
        margin: 16px 0;
      }
    }
    .contact-link {
      width: 100%;
      gap: 64px;
      a {
        font-size: 24px;
      }
    }
    .company-info {
      margin-top: 32px;

      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .contact-img {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }
}
</style>
