<script>
export default {
  data() {
    return {
      alumnos: [
        { nc: 12345, nombre: 'Nelsy', carrera: 'ISC' },
        { nc: 12346, nombre: 'Karen', carrera: 'TICS' },
        { nc: 12347, nombre: 'Ricardo', carrera: 'ISC' },
        { nc: 12348, nombre: 'Mariana', carrera: 'TICS' },
      ]
    };
  }
}
</script>

<template>
  <div class="container">
    <h3 class="mt-4 text-center">Lista de alumnos</h3>
    <ul class="alumnos-list">
      <li
        class="alumno-item"
        v-for="alumno in alumnos"
        :key="alumno.nc"
      >
        <strong>{{ alumno.nombre }}</strong> - 
        <strong>{{ alumno.carrera }}</strong>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  color: rgb(255, 255, 255);
  background-color: rgb(74, 10, 95);
  border-radius: 15px;
  padding: 10px;
}

.alumnos-list {
  list-style-type: none;
  padding: 0%;
}

.alumno-item {
  color: rgb(0, 0, 0);
  background-color: rgb(184, 104, 213);
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>