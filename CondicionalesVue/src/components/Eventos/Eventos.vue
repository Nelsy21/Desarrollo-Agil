<template>  
    <div class="container">
        <div class="row mt-4">

            
            <div>
                <h4>Evento click</h4>

                <button @click="clic" class="btn btn-danger" type="button">Dale clic</button>
                <button @click="SoyBoton" class="btn btn-warning mx-4" type="button">Dale clic 2</button>
                <button  @click="cambiarColor" :class="btnColor" class="btn" type="button">Cambiar color</button>

            </div>
            <div>
                <br><br><br><br><h4>Evento Change</h4>
                <label class="input-group-text" for="">Ingresa tu nombre</label>
                <input class="form-control mt-4" type="text" id="nombre" @change="nombreE">
                <p>El nombre ingresado es: <strong>{{ nombre }}</strong></p>
            </div>
            <div>
                <br><br><br><br><h4>Evento mouseenter y mouseleave</h4>
            <div style="color:aliceblue; width: 300px; height: 200px; background-color: black; text-align: center; padding: 15px; border-radius: 15px;" 
                @mouseenter="MostrarMensaje" 
                @mouseleave="OcultarMensaje">
                

                <p>Pase el mouse</p>
                <p>{{ mensaje }}</p>
            </div>
        </div>



        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombre: '',
            mensaje: '',
            btnColor: 'btn-primary'
        };
    },
    methods: {
        cambiarColor() {
            this.btnColor = this.btnColor === 'btn-primary' ? 'btn-success' : 'btn-primary';
        },
        
        clic() {
            alert("Gracias por darle clic");
        },
        SoyBoton() {
            alert("Soy un botón");
        },
        nombreE(event) {
            this.nombre = event.target.value;
        },

        MostrarMensaje() {
            this.mensaje = "El mouse está dentro del cuadro negro";
        },
        OcultarMensaje() {
            this.mensaje = "El mouse está fuera del cuadro negro";
        }
    }
};
</script>

<style>

</style>