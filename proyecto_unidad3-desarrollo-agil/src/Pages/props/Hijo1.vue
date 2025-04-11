<script setup>
import { ref } from 'vue';

defineProps({
  edad: String,
});
</script>

<template>
  <div class="card text-center border-primary shadow-lg" style="max-width: 18rem; margin: auto;">
    <div class="card-header bg-primary text-white">Componente Hijo 1</div>
    <div class="card-body">
      <h6 class="card-title">Soy el componente hijo 1</h6>
      <p class="card-text">Edad: {{ edad }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>