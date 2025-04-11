<template> 
  <div class="container mt-4">
    <h3 class="titulo">HORARIO DE CLASES (8US)</h3>
    <div class="table-responsive">
      <table class="table table-bordered text-center">
        <thead class="text-white bg-primary">
          <tr>
            <th scope="col" class="header-cell">Hora</th>
            <th scope="col" class="header-cell">Lunes</th>
            <th scope="col" class="header-cell">Martes</th>
            <th scope="col" class="header-cell">Miércoles</th>
            <th scope="col" class="header-cell">Jueves</th>
            <th scope="col" class="header-cell">Viernes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in mergedHorario" :key="index">
            <td class="fw-bold hora-cell">{{ row.hora }}</td>
            <td :rowspan="row.Lunes.rowspan" v-if="row.Lunes.show" :class="['dia-cell', { 'empty-cell': row.Lunes.text === '' }]">{{ row.Lunes.text || '—' }}</td>
            <td :rowspan="row.Martes.rowspan" v-if="row.Martes.show" :class="['dia-cell', { 'empty-cell': row.Martes.text === '' }]">{{ row.Martes.text || '—' }}</td>
            <td :rowspan="row.Miércoles.rowspan" v-if="row.Miércoles.show" :class="['dia-cell', { 'empty-cell': row.Miércoles.text === '' }]">{{ row.Miércoles.text || '—' }}</td>
            <td :rowspan="row.Jueves.rowspan" v-if="row.Jueves.show" :class="['dia-cell', { 'empty-cell': row.Jueves.text === '' }]">{{ row.Jueves.text || '—' }}</td>
            <td :rowspan="row.Viernes.rowspan" v-if="row.Viernes.show" :class="['dia-cell', { 'empty-cell': row.Viernes.text === '' }]">{{ row.Viernes.text || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const horario = [
  { hora: '07:00-08:00', Lunes: 'Programación Lógica y Funcional', Martes: 'Inteligencia Artificial', Miércoles: 'Desarrollo Ágil', Jueves: 'Programación Lógica y Funcional', Viernes: '' },
  { hora: '08:00-09:00', Lunes: 'Programación Lógica y Funcional', Martes: 'Inteligencia Artificial', Miércoles: 'Desarrollo Ágil', Jueves: 'Programación Lógica y Funcional', Viernes: '' },
  { hora: '09:00-10:00', Lunes: 'Desarrollo Ágil', Martes: 'Administración de Redes', Miércoles: '', Jueves: 'Administración de Redes', Viernes: '' },
  { hora: '10:00-11:00', Lunes: 'Desarrollo Ágil', Martes: 'Administración de Redes', Miércoles: '', Jueves: 'Administración de Redes', Viernes: 'Desarrollo Ágil' },
  { hora: '11:00-12:00', Lunes: '', Martes: 'Desarrollo en la Nube', Miércoles: 'Desarrollo en la Nube', Jueves: 'Inteligencia Artificial', Viernes: 'Desarrollo en la Nube' },
  { hora: '12:00-13:00', Lunes: '', Martes: 'Desarrollo en la Nube', Miércoles: 'Desarrollo en la Nube', Jueves: 'Inteligencia Artificial', Viernes: '' },
  { hora: '13:00-14:00', Lunes: '', Martes: '', Miércoles: 'Desarrollo Con RA', Jueves: 'Desarrollo con RA', Viernes: '' },
  { hora: '14:00-15:00', Lunes: '', Martes: '', Miércoles: 'Desarrollo Con RA', Jueves: '', Viernes: 'Taller de Investigación II' },
  { hora: '15:00-16:00', Lunes: '', Martes: 'Desarrollo con RA', Miércoles: 'Taller de Investigación II', Jueves: '', Viernes: 'Taller de Investigación II' },
  { hora: '16:00-17:00', Lunes: '', Martes: 'Desarrollo con RA', Miércoles: 'Taller de Investigación II', Jueves: '', Viernes: '' },
];

function mergeHorario(data) {
  const merged = [];
  const colSpanTracker = {};

  data.forEach((row, rowIndex) => {
    const newRow = { hora: row.hora };

    Object.keys(row).forEach((dia) => {
      if (dia !== 'hora') {
        if (rowIndex > 0 && row[dia] === data[rowIndex - 1][dia]) {
          colSpanTracker[dia].rowspan++;
          newRow[dia] = { text: row[dia], rowspan: 0, show: false };
        } else {
          colSpanTracker[dia] = { text: row[dia], rowspan: 1, show: true };
          newRow[dia] = colSpanTracker[dia];
        }
      }
    });

    merged.push(newRow);
  });

  return merged;
}

const mergedHorario = ref(mergeHorario(horario));
</script>

<style scoped>

.titulo {
  text-align: center;
  background-color: rgba(226, 174, 246, 0.5);
  color: #66219b;
  padding: 15px;
  border-radius: 10px;
  font-weight: bold;
  width: 100%;
  max-width: none;
  display: block;
}


.header-cell {
  background-color:  #66219b !important;
  color: rgb(255, 255, 255) !important;
}


.hora-cell {
  background-color:  #66219b;
  color: white;
  font-weight: bold;
}


.dia-cell {
  background-color: #ffedfa;
}

.empty-cell {
  background-color: #ffffff;
  color: #ffffff;
  font-style: italic;
}



.table-bordered {
  border: 2px solid #a8a8a8; 
}



</style>