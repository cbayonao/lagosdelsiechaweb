<template>
<v-card>
  <v-card-title>
    <h1>Entradas</h1>
  </v-card-title>
<v-card-text>
  <sdataiterator :items="entradas" />
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
  components: { Sdataiterator, Comeback },
  data() {
    return {
      entradas: [
        {
          nombre: "Tomates Mozzarella",
          precio: "$ 24.000",
          categoria: "Entradas",
          detalle: "Frescos tomates gratinados con queso mozarella, a las finas hierbas.",
          imagen: "https://source.unsplash.com/hnyZg63sRCY/400x400",
        },
        {
          nombre: "Champiñones al ajillo",
          precio: "$ 25.000",
          categoria: "Entradas",
          detalle: "Champiñones frescos gratinados con el mágico toque del ajo.",
          imagen: "",
        },
      ],
    }
  },
  
}
</script>

<style>

</style>