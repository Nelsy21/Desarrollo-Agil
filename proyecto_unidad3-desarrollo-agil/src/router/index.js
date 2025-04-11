import { createRouter, createWebHashHistory } from "vue-router";

// Agregando páginas de la aplicación
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import CalculadoraV1 from "../Pages/calculadora/CalculadoraV1.vue";
import CalculadoraV2 from "../Pages/calculadora/CalculadoraV2.vue";
import Horario from "../Pages/Horario/Horario.vue";
import Padre from "../Pages/props/Padre.vue";
import Eventos from "../Pages/Eventos/Eventos.vue";
import Recorrido from "../Pages/Recorrido/Recorrido.vue";
import Horariov2 from "../Pages/Horario/Horariov2.vue";
import recorridov2 from "../Pages/Recorrido/recorridov2.vue";
import Recorridov2 from "../Pages/Recorrido/recorridov2.vue";

// Definir las rutas
const routes = [
  {
    path: "/calculadorav1",
    name: "calculadorav1",
    component: CalculadoraV1,
  },
  {
    path: "/calculadorav2",
    name: "calculadorav2",
    component: CalculadoraV2,
  }, 
  {
    path: "/horario",
    name: "horario",
    component: Horario,
  },

  {
    path: "/props",
    name: "props",
    component: Padre,
  },

  {
    path: "/eventos",
    name: "eventos",
    component: Eventos,
  },
 

  {
    path: "/horariov2",
    name: "horariov2",
    component: Horariov2,
  },

  {
    path: "/recorrido",
    name: "recorrido",
    component: Recorrido,
  },

  {
    path: "/recorridov2",
    name: "recorridov2",
    component: Recorridov2,
  },
 
 
];

// Crear la instancia del router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
