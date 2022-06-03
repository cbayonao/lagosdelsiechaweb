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
          nombre: "Desayuno Continental",
          precio: "$ 17.000",
          categoria: "Desayunos",
          detalle: "Chocolate o Café con leche, huevos al gusto y pan o arepa.",
          imagen: "https://source.unsplash.com/5sD2TgDZOxA/400x400",
        },
      ],
    };
  },
};
</script>

<style>
</style>