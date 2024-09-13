<template>
  <div class="maxwidth-container contact-info">
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
</template>

<script setup></script>

<style lang="scss" scoped>
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

@media screen and (max-width: 1440px) {
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

@media screen and (max-width: 1216px) {
  .contact-info {
    h3 {
      font-size: 60px;
    }
  }

  .contact-img {
    img {
      width: 70%;
    }
  }
}

@media screen and (max-width: 768px) {
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
    z-index: -1;
    img {
      width: 80%;
    }
  }
}
</style>
