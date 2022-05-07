<template>
  <v-card>
    <v-card-title>
      <h1>Menu infantil</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="menuinfantil" />
    </v-card-text>
    <v-card-actions>
        <comeback />
    </v-card-actions>
  </v-card>
</template>

<script>
import comeback from '../../../components/comeback.vue';
export default {
  components: { comeback },
  data() {
    return {
      menuinfantil: [
        {
          nombre: "Nuggets de pollo",
          precio: "$ 19.000",
          categoria: "Menú infantil",
          detalle: "Con papá a la francesa, salsas, jugo y sorpresita.",
          imagen: "",
        },
        {
          nombre: "Hamburguesa",
          precio: "$ 19.000",
          categoria: "Menú infantil",
          detalle: "Con papá a la francesa.",
          imagen: "",
        },
      ],
    };
  },
};
</script>

<style>
</style>