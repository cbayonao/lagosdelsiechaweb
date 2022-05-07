<template>
  <v-card>
    <v-card-title>
      <h1>Pastas</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="pastas" />
    </v-card-text>
    <v-card-actions>
      <comeback />
    </v-card-actions>
  </v-card>
</template>

<script>
import comeback from "../../../components/comeback.vue";
import Sdataiterator from "../../../components/Sdataiterator.vue";
export default {
  components: { comeback, Sdataiterator },
  data() {
    return {
      pastas: [
        {
          nombre: "Pasta a la Carbonara",
          precio: "$ 31.000",
          categoria: "Pastas",
          detalle: "Spaguetti con tocineta y salsa carbonara.",
          imagen: "",
        },
        {
          nombre: "Pasta al pesto",
          precio: "$ 29.000",
          categoria: "Pasta y vegetarianos",
          detalle: 65,
          imagen: "Con pesto y champiñones frescos de la región.",
        },
      ],
    };
  },
};
</script>

<style>
</style>