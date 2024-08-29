<template>
  <v-card>
    <v-card-title>
      <div class="no-break">
        <h1>Truchas y mariscos</h1>
      </div>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="truchas" />
    </v-card-text>
    <v-card-actions>
      <comeback />
    </v-card-actions>
  </v-card>
</template>


<script>
import Comeback from "../../../components/comeback.vue";
import Sdataiterator from "../../../components/Sdataiterator.vue";
export default {
  components: { Sdataiterator, Comeback },

  data() {
    return {
      truchas: [
        {
          nombre: "Cazuela de mariscos",
          precio: "$ 55.000",
          categoria: "Truchas y mariscos",
          detalle: "Con el toque del Siecha que te encantará.",
          imagen: "https://source.unsplash.com/e6Djr0-Is8A/400x400",
        },
        {
          nombre: "Trucha a la marinera",
          precio: "$ 64.000",
          categoria: "Truchas y mariscos",
          detalle: "Bañada en salsa de frescos mariscos.",
          imagen:
            "https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2FT_marinera.jpg?alt=media&token=69a06163-d578-4618-9968-81f42145c965",
        },
        {
          nombre: "Trucha al ajillo",
          precio: "$ 38.000",
          categoria: "Truchas y mariscos",
          detalle: "Con el poder y saludable sabor del ajo.",
          imagen:
            "https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2FT_ajillo3.jpg?alt=media&token=2eefc7ad-a50a-4cac-97c5-a2c1947101f8",
        },
        {
          nombre: "Trucha en salsa de champiñones",
          precio: "$ 42.000",
          categoria: "Truchas y mariscos",
          detalle: "Con un delicioso aroma que es secreto del chef.",
          imagen:
            "https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2FT_sala_champi%C3%B1ones_2.jpg?alt=media&token=144fcb57-740d-4387-9edd-b45e4780d3da",
        },
        {
          nombre: "Trucha al curry con camarones",
          precio: "$ 60.000",
          categoria: "Truchas y mariscos",
          detalle: "La nueva delicia de 'El Siecha'.",
          imagen: "",
        },
        {
          nombre: "Trucha a la griega",
          precio: "$ 48.000",
          categoria: "Truchas y mariscos",
          detalle:
            "Gratinada en dos quesos, con aceitunas verdes, tomate y cebolla.",
          imagen: "https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2Ft_griega.jpg?alt=media&token=e368b065-fcf5-4f28-b3ad-536fcae1b8a8",
        },
        {
          nombre: "Trucha florentina",
          precio: "$ 44.000",
          categoria: "Truchas y mariscos",
          detalle:
            "A la plancha, terminada al horno, con puré de espinacas sobre salsa de queso.",
          imagen: "",
        },
        {
          nombre: "Trucha Roquefort",
          precio: "$ 44.000",
          categoria: "Truchas y mariscos",
          detalle: "Bañada en salsa de queso azul.",
          imagen: "",
        },
        {
          nombre: "Trucha crocante al pesto",
          precio: "$ 42.000",
          categoria: "Truchas y mariscos",
          detalle:
            "Filete apanado con mezcla de almendra, ajo y albahaca dorado.",
          imagen: "",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
div.no-break {
  white-space: normal;
  word-break: keep-all;
}
</style>