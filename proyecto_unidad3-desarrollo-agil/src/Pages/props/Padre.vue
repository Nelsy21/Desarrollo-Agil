<script setup> 
import { ref } from 'vue'
import Hijo1 from './Hijo1.vue';  
import Hijo2 from './Hijo2.vue';

defineProps({
  msg: String,
});
</script>

<template>
  <div class="container">
    <h1>SOY EL COMPONENTE PADRE</h1>

    <div class="children-container">
      <Hijo1 class="child-card" edad="10" />
      <Hijo2 class="child-card" edad="4" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #d1e9ff, #f3f8ff);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
}

h1 {
  text-align: center;
  background-color: #a4c8f2;
  color: rgb(61, 37, 134);
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.children-container {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.child-card {
  background: rgb(255, 255, 255);
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
}

.child-card:hover {
  transform: scale(1.05);
}
</style>