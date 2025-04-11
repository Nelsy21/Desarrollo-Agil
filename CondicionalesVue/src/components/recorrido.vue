<script> 
export default {
  data() {
    return {
      alumnos: [
        { nc: 21620165, nombre: "Nelsy Ortiz López", carrera: "Ingeniería en Sistemas Computacionales", hobby: "Atletismo"},
        { nc: 21620166, nombre: "Miguel García García", carrera: "Ingeniería en Mecatrónica", hobby: "Basketball" },
        { nc: 21620167, nombre: "Carlos Osorio Vargas", carrera: "Licenciatura en Arquitectura", hobby: "Música" },
        { nc: 21620168, nombre: "Irving Castro Hernandez", carrera: "Licenciatura en Administración", hobby: "Dibujo" },
        { nc: 21620169, nombre: "Karen Ortiz López", carrera: "Ingeniería Civil", hobby: "Leer" }
      ]
    }
  },
}
</script>

<template>
  <div class="container">
    <h3 class="titulo">LISTA DE ALUMNOS</h3>
    <div class="contenido">
      <div v-for="alumno in alumnos" :key="alumno.nc" class="alumno-card">
        <strong>{{ alumno.nc }}</strong> -
          <span>{{ alumno.nombre }}</span> - 
          <span>{{ alumno.carrera }}</span>-
          <span>{{ alumno.hobby }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.titulo {
  text-align: center;
  background-color: rgba(173, 216, 230, 0.5);
  color: #333;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  width: 60%;
  max-width: 800px; 
}

.contenido {
  width: 60%; 
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alumno-card {
  background-color: rgba(255, 182, 193, 0.5);
  color: #333;
  padding: 15px;
  border-radius: 10px;
  font-size: 1rem;
  border: 1px solid rgba(21, 15, 18, 0.4);
  width: 100%; /* Igual que el título */
  transition: transform 0.2s;
  margin-bottom: 10px; 
}

.alumno-card:hover {
  transform: scale(1.05);
  background-color: rgba(255, 182, 193, 0.7);
}
</style>