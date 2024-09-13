<template>
  <div class="service-card">
    <div class="service-info">
      <div class="service-title">
        <h3>{{ title }}</h3>
        <h1>{{ count }}</h1>
      </div>
      <p>{{ desc }}</p>
    </div>
    <div class="service-icon">
      <img
        :src="`/images/icons/services/${icon}.png`"
        alt="service-icon"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["title", "count", "desc", "icon"]);
</script>

<style lang="scss" scoped>
.service-card {
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 224px;

  .service-info {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;

    .service-title {
      display: flex;
      align-items: flex-end;

      h3 {
        color: #fd5001;
      }

      h1 {
        text-align: right;
        width: 576px;
        position: absolute;
        z-index: -1;
        margin-bottom: -34px;
      }
    }

    p {
      margin-top: 32px;
    }
  }
  .service-icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@media screen and (max-width: 1440px) {
  .service-card {
    height: auto;
    .service-icon {
      justify-content: end;
    }
  }
}

@media screen and (max-width: 1216px) {
  .service-card {
    margin-top: 160px;

    .service-info {
      .service-title {
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        h3 {
        }

        h1 {
          width: 50%;
          font-size: 160px;
        }
      }

      p {
        font-size: 14px;
      }
    }

    .service-icon {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      img {
        width: 90%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .service-card {
    width: 100%;
    display: flex;
    margin-top: 32px;

    .service-info {
      width: 100%;

      .service-title {
        width: 100%;
        align-items: flex-start;

        h3 {
          width: 50%;
        }

        h1 {
          width: 50%;
          position: relative;
          font-size: 72px;
          line-height: 90px;
          margin: 0;
        }
      }

      p {
        font-size: 16px;
        margin-top: 90%;
      }
    }

    .service-icon {
      width: calc(100% - 32px);
      position: absolute;
      margin-top: 72px;
      z-index: -1;

      img {
        width: 100%;
      }
    }
  }
}
</style>
