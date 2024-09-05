<template>
  <p class="typed-text">{{ text }}</p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["text", "time", "delay"]);

const text = ref("");
const index = ref(0);

onMounted(() => {
  setTimeout(() => {
    const intervalId = setInterval(() => {
      if (index.value < props.text.length) {
        text.value += props.text[index.value];
        index.value++;
      } else {
        clearInterval(intervalId);
      }
    }, props.time || 50);
  }, props.delay || 0);
});
</script>
