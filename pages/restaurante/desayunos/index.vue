<template>
  <v-card>
    <v-card-title>
      <h1>Desayunos</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="desayunos" />
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
      desayunos: [
        {
          nombre: "Desayuno Alegria",
          precio: "$ 34.000",
          categoria: "Desayunos",
          detalle: "Jugo de frutas, waffles condulce de fresas y moras, huevos al gusto, milo frio o caliente.",
          imagen: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>