<script> 
export default {
    data() {
        return {
            display: '',
            currentValue: 0
        };
    },
    methods: {
        agregarNumero(numero) {
            this.display += numero;
        },
        calculo() {
            try {
                this.currentValue = eval(this.display); 
                this.display = this.currentValue.toString(); 
            } catch {
                this.display = 'Error';
            }
        },
        limpiarDisplay() {
            this.display = '';
        }, 
        eliminarNumero(){
            this.display = this.display.slice(0, -1);
        }
    }
};
</script>

<template>
<div class="container d-flex justify-content-center align-items-center">
    <div class="card p-4 calculadora">
        <div class="card-body">
            <h4 class="text-center titulo">CALCULADORA</h4>
            <div class="mb-3">
                <input type="text" class="form-control display" v-model="display" disabled>
            </div>
            <div class="grid-container ">
                <button class="btn btn-accion" @click="agregarNumero('%')">%</button>   
                <button class="btn btn-accion">CE</button> 
                <button class="btn btn-accion">C</button> 
                <button class="btn btn-borrar" @click="eliminarNumero">B</button> 
            </div>

            <div class="grid-container mt-2">
                <button class="btn btn-numero" @click="agregarNumero(7)">7</button>   
                <button class="btn btn-numero" @click="agregarNumero(8)">8</button> 
                <button class="btn btn-numero" @click="agregarNumero(9)">9</button> 
                <button class="btn btn-operador" @click="agregarNumero('/')">÷</button> 
            </div>

            <div class="grid-container mt-2">
                <button class="btn btn-numero" @click="agregarNumero(4)">4</button>   
                <button class="btn btn-numero" @click="agregarNumero(5)">5</button> 
                <button class="btn btn-numero" @click="agregarNumero(6)">6</button> 
                <button class="btn btn-operador" @click="agregarNumero('*')">×</button> 
            </div>

            <div class="grid-container mt-2">
                <button class="btn btn-numero" @click="agregarNumero(1)">1</button>   
                <button class="btn btn-numero" @click="agregarNumero(2)">2</button> 
                <button class="btn btn-numero" @click="agregarNumero(3)">3</button> 
                <button class="btn btn-operador" @click="agregarNumero('-')">−</button> 
            </div>

            <div class="grid-container mt-2">
                <button class="btn btn-igual" @click="calculo">=</button>   
                <button class="btn btn-numero" @click="agregarNumero(0)">0</button> 
                <button class="btn btn-numero" @click="agregarNumero('.')">.</button> 
                <button class="btn btn-operador" @click="agregarNumero('+')">+</button> 
            </div>
        </div>
    </div>
</div>
</template>

<style>
.calculadora {
    width: 320px;
    background: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
.titulo {
    font-weight: bold;
    color: #333;
}
.display {
    height: 60px;
    font-size: 24px;
    text-align: right;
   
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 8px;
  
}
.btn {
    height: 60px;
    font-size: 22px;
    font-weight: bold;
    user-select: none;
}
.btn-numero {
    background: #e0e0e0 !important;
    color: #333 !important;

}
.btn-operador {
    background: #ffa726 !important;
    color: white !important;
    
}
.btn-igual {
    background: #66bb6a !important;
    color: white !important;
}
.btn-borrar {
    background: #ef5350 !important;
    color: white !important;
    border: 2px solid #e53935;
}
.btn-accion {
    background: #9e9e9e !important;
    color: white !important;
}
</style>
