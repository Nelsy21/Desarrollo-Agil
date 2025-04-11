<template>
  <div id="app">
    <div class="container center">
      <nav class="navbar navbar-expand-lg navbar-dark color">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">UNIDAD III</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="calculadorasDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                > Calculadora
                </a>
                <ul class="dropdown-menu" aria-labelledby="calculadorasDropdown">
                  <li>
                    <router-link class="dropdown-item" to="/calculadorav1">Calculadora V1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/calculadorav2">Calculadora V2</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="calculadorasDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                > Horario
                </a>
                <ul class="dropdown-menu" aria-labelledby="calculadorasDropdown">
                  <li>
                    <router-link class="dropdown-item" to="/horario">Horario V1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/horariov2"> Horario V2</router-link>
                  </li>
                </ul>
              </li>



    <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-white"
                  href="#"
                  id="calculadorasDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                > Recorrido
                </a>
                <ul class="dropdown-menu" aria-labelledby="calculadorasDropdown">
                  <li>
                    <router-link class="dropdown-item" to="/recorrido">Recorrido V1</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" to="/recorridov2"> Recorrido V2</router-link>
                  </li>
                </ul>
              </li>

              

              <li class="nav-item">
                <router-link class="nav-link text-white" to="/props">Props</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-white" to="/eventos">Eventos</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

.color {
  background-color: #342065;
}
</style>
