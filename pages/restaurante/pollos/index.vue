<template>
  <v-card>
    <v-card-title>
      <h1>Pollos</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="pollos" />
    </v-card-text>
    <v-card-actions>
      <comeback />
    </v-card-actions>
  </v-card>
</template>


<script>
import comeback from '../../../components/comeback.vue';
import Sdataiterator from '../../../components/Sdataiterator.vue';
export default {
  components: { comeback, Sdataiterator },
  data() {
    return {
      pollos: [
        {
          nombre: "Pechuga a la plancha",
          precio: "$ 37.000",
          categoria: "Pollos",
          detalle: "Deliciosa pechuga a la plancha, con el toque de la casa.",
          imagen: "",
        },
        {
          nombre: "Pechuga Lagos del Siecha",
          precio: "$ 39.000",
          categoria: "Pollos",
          detalle: "Pechuga gratinada con champiñones frescos, a la plancha.",
          imagen: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>