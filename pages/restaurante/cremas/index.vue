<template>
  <v-card>
    <v-card-title>
      <h1>Cremas</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="cremas" />
    </v-card-text>
    <v-card-actions>
        <comeback />
    </v-card-actions>
  </v-card>
</template>
<script>
import Comeback from '../../../components/comeback.vue';
import Sdataiterator from '../../../components/Sdataiterator.vue';
export default {
  components: { Sdataiterator, Comeback },
  data() {
    return {
      cremas: [
        {
          nombre: "Crema de Champiñones",
          precio: "$ 21.000",
          categoria: "Cremas",
          detalle: "Suave a su paladar, con frescos champiñones del campo.",
          imagen: "",
        },
        {
          nombre: "Crema Siecha",
          precio: "$ 20.000",
          categoria: "Cremas",
          detalle: 49,
          imagen:
            "Con el toque secreto que le da nuestra fresca y deliciosa trucha.",
        },
      ],
    };
  },
};
</script>

<style>
</style>