<template>
<v-card>
  <v-card-title>
    <h1>Carnes</h1>
  </v-card-title>
<v-card-text>
  <sdataiterator :items="carnes" />
</v-card-text>
<v-card-actions>
  <comeback />
</v-card-actions>
</v-card>
</template>


<script>
import Comeback from '../../../components/comeback.vue'
import Sdataiterator from '../../../components/Sdataiterator.vue'
export default {
  components: { Sdataiterator },
  data() {
    Comeback
    return {
      carnes: [
        {
          nombre: "Churrasco",
          precio: "$ 44.000",
          categoria: "Carnes",
          detalle: "Chatas de res con chimichurri.",
          imagen: "",
        },
        {
          nombre: "Costillitas BBQ",
          precio: "$ 47.000",
          categoria: "Carnes",
          detalle: "Deliciosas costillas con salsa BBQ de la casa.",
          imagen: "",
        },
      ]
    }
  },
}
</script>

<style>

</style>
Sdataiterator