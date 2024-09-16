<template>
  <div class="maxwidth-container nav-bar">
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item"><RouterLink to="/">Home</RouterLink></li>
      </ul>
    </nav>
  </div>
  <div class="maxwidth-container fullscreen-container hero-section">
    <div class="hero-text">
      <h2>Web 2.5 academy</h2>
      <p>Shape your career with hands-on Web3 projects. Join to learn, innovate, and connect with experts.</p>
    </div>
    <div class="hero-image"></div>
  </div>
  <div class="maxwidth-container fullscreen-container program-section">
    <h3>Program Goals</h3>
    <div class="program-info">
      <div class="text-left">
        <p>The Web 2.5 Academy is a program designed to include a broader range of participants with basic programming skills, primarily in Python or Javascript. <span>Its purpose is to guide them towards simple yet concrete Web3 projects.</span> Consequently, we aim to involve an entirely new group of talented individuals in the blockchain industry, enabling them to establish their careers with Web3 projects right from the outset.</p>
      </div>
      <div class="text-right">
        <p>The training program strives to strengthen communities beyond the Belgrade and Novi Sad ecosystems. Specifically, but not exclusively, in locations such as Majdanpek, Pirot, Novi Pazar, Pančevo, and Niš. The Web 2.5 Academy employs a hybrid concept, wherein the first and final lectures will be conducted live, while the remaining sessions will be held online. During the introductory lecture, participants will have the opportunity to meet the lecturers and gain insights into the program.</p>
      </div>
    </div>
  </div>
  <div class="maxwidth-container fullscreen-container modules-section">
    <div class="modules-info">
      <div class="title">
        <h3>Web 2.5 modules</h3>
      </div>

      <div class="info">
        <p>We aim to involve an entirely new group of talented individuals in the blockchain industry, enabling them to establish their careers with Web3 projects right from the outset.</p>
      </div>
    </div>
    <div class="modules">
      <div class="modules-col">
        <ModulesCard
          title="Fundamentals of Cryptography"
          desc="Acquire a working knowledge of cryptographic primitives used in blockchain technology: hash functions, public key cryptography systems, encryption and digital signatures."
        />
        <ModulesCard
          title="JAVASCRIPT & NODE JS"
          desc="Introduction to programming in JavaScript, language concepts and structures (objects, functions), synchronous and asynchronous programming, NodeJS as a platform."
        />
      </div>
      <div class="modules-col">
        <ModulesCard
          title="Basics of Blockchain Technology, Ledger Systems and Cryptocurrencies"
          desc="Blockchain as a data structure, taxonomy of distributed ledger systems, the concept of consensus and consensus algorithms (proof of work, proof of stake, proof of authority)."
        />
        <ModulesCard
          title="WEB FRONTEND"
          desc="HTML, CSS, JS - Basics of Web Programming, HTML and Hypertext, Web Page Structure and DOM, Javascript in Browser."
        />
      </div>
      <div class="modules-col">
        <ModulesCard
          title="Basics of Smart Contracts"
          desc="Solidity, EVM - Introduction to programming blockchain and Ethereum Virtual Machine (transactions, accounts, storage), writing smart contracts in Solidity language and supporting tools (Remix IDE)."
        />
        <ModulesCard
          title="Decentralized applications and Web integration of smart contracts"
          desc="Web3 concept and decentralized applications, IPFS storage, synergy of previous knowledge and concepts (Solidity, JS, Web) creates a complete and functional application."
        />
      </div>
    </div>
  </div>
  <div class="maxwidth-container fullscreen-container media-section">
    <div class="media-title">
      <h3>READY TO JOIN OUR NEXT ITERATION?</h3>
    </div>
    <div class="media-image">
      <img
        src="/images/team-photo.png"
        alt="team-photo"
      />
    </div>
    <div class="media-info">
      <p>We're gearing up to launch a brand new phase, and we'd love to keep you in the loop! To stay updated on the exact timing of our upcoming cycle, drop us an email at <a href="mailto:office@moonstruck.io">office@moonstruck.io</a> or follow us on social media for real-time updates and sneak peeks..</p>
    </div>
  </div>
  <div class="contact-section">
    <Contact />
  </div>
</template>

<script setup>
import Contact from "@/components/Contact.vue";
import ModulesCard from "@/components/ModulesCard.vue";
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: flex-start;
  margin-top: 32px;

  .nav-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 16px;
    }
  }

  .nav-item {
    color: #fff;
    cursor: pointer;
    position: relative;
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
  }
}
.hero-section {
  display: flex;
  justify-content: start;
  align-items: center;

  .hero-text {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      max-width: 565px;
      font-size: 120px;
      line-height: 154px;
    }

    p {
      max-width: 565px;
      font-size: 16px;
      line-height: 24px;
    }

    a {
      text-decoration: none;
      color: #ffffff;
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
}

.program-section {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .program-info {
    display: flex;
    margin-top: 52px;
    gap: 24px;

    .text-left,
    .text-right {
      max-width: 576px;

      p,
      span {
        font-size: 16px;
        line-height: 24px;
        text-transform: capitalize;
      }

      span {
        color: #fd5001;
      }
    }
  }
}

.modules-section {
  height: auto;
  .modules-info {
    display: flex;
    justify-content: center;
    align-items: center;

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
  .modules {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 94px;

    .modules-col {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }
}

.media-section {
  height: auto;
  margin-top: 240px;
  display: flex;
  position: relative;
  gap: 24px;

  .media-title {
    max-width: 456px;
  }

  .media-image {
    width: 100vw;
    img {
      width: 100%;
    }
  }

  .media-info {
    position: absolute;
    max-width: 790px;
    top: 70%;
    background-color: rgba(37, 31, 33, 0.5);
    padding: 24px;
    border-radius: 24px;

    p,
    a {
      font-size: 16px;
      line-height: 24px;
    }

    a {
      text-decoration: none;
      color: #fd5001;
    }
  }
}

.contact-section {
  height: 610px;
  justify-content: start;
  align-items: start;
  margin-top: 200px;
  position: relative;
}

@media screen and (max-width: 1440px) {
  .media-section {
    .media-title {
      h3 {
        font-size: 80px;
        line-height: 64px;
      }
    }
    .media-info {
      top: 60%;
    }
  }
}

@media screen and (max-width: 1216px) {
  .navbar {
    position: absolute;
    top: 0;
    right: 0;
    width: 72px;
    height: 52px;
    background-color: black;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-list {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 16px;
      }
    }

    .nav-item {
      color: #fff;
      cursor: pointer;
      position: relative;
      a {
        font-size: 16px;
        line-height: 24px;
        font-weight: normal;
        font-family: "Space Mono", monospace;
      }

      &::after {
        content: none;
        color: #fff;
        margin: 0 8px;
      }
    }
  }

  .hero-section {
    .hero-text {
      h2 {
        font-size: 90px;
        line-height: 100px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  .modules-section {
    .modules-info {
      flex-direction: column;
      align-items: flex-start;
      .title {
        max-width: 100%;
        h3 {
          text-wrap: nowrap;
        }
      }

      .info {
        width: 100%;
        margin: 32px 0;
      }
    }

    .modules {
      display: flex;
      flex-direction: column;
      margin-top: 0;

      .modules-col {
        display: flex;
        flex-direction: row;
      }
    }
  }
  .media-section {
    .media-info {
      max-width: 50%;
      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    height: auto;

    .hero-text {
      width: 100%;
      margin-top: 24px;
      order: 2;

      h2 {
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 16px;
      }
    }

    .hero-image {
      width: 100vw;
      position: relative;
      height: 40vh;
    }
  }

  .program-section {
    height: auto;
    margin-top: 64px;
    gap: 32px;

    h3 {
      font-size: 36px;
    }

    .program-info {
      flex-direction: column;
      margin: 0;
      gap: 32px;
    }
  }

  .modules-section {
    height: auto;

    .modules-info {
      flex-direction: column;
      align-items: flex-start;

      .title {
        width: 100%;
        margin-top: 120px;

        h3 {
          font-size: 36px;
          line-height: 48px;
        }
      }

      .info {
        width: 100%;
        margin: 32px 0;
      }
    }

    .modules {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      margin: 0;

      .modules-col {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .media-section {
    flex-direction: column;
    height: auto;
    margin-top: 70px;
    .media-title {
      width: 80%;
      text-wrap: wrap;
    }

    .media-image {
      width: calc(100% + 32px);
      margin: 0 -16px;
      order: -1;

      img {
        width: 100%;
      }
    }

    .media-info {
      position: relative;
      bottom: 0;
    }
  }

  .contact-section {
    width: auto;
    height: 624px;
    margin-top: 100px;
  }
}
</style>
