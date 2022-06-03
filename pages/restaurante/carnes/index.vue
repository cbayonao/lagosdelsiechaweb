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
          precio: "$ 38.000",
          categoria: "Carnes",
          detalle: "Chatas de res con chimichurri.",
          imagen: "",
        },
        {
          nombre: "Baby beef",
          precio: "$ 42.000",
          categoria: "Carnes",
          detalle: "Fino lomo de res con chimichurri.",
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