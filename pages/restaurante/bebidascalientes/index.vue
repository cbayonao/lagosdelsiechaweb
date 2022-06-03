<template>
<v-card>
  <v-card-title>
    <h1>Bebidas calientes</h1>
  </v-card-title>
<v-card-text>
  <sdataiterator :items="bebidascalientes" />
</v-card-text>
<v-card-actions>
        <comeback />
    </v-card-actions>
</v-card>
</template>

<script>
import comeback from '../../../components/comeback.vue'
export default {
  components: { comeback },
  data() {
    return {
      bebidascalientes: [
        {
          nombre: "Chocolate o Café con leche",
          precio: "$ 6.000",
          categoria: "Bebidas Calientes",
          detalle: "Perfecto para un dia de frío.",
          imagen: "https://source.unsplash.com/j3FidswVdQk/400x400",
        },
        {
          nombre: "Aguadepanela",
          precio: "$ 4.500",
          categoria: "Bebidas Calientes",
          detalle: "Lo tradicional, nunca falla.",
          imagen: "https://source.unsplash.com/m-gqDRzbJLQ/400x400",
        },
        {
          nombre: "Tinto o Aromática",
          precio: "$ 3.000",
          categoria: "Bebidas Calientes",
          detalle: "Buen café, para cualquier momento.",
          imagen: "https://source.unsplash.com/ydju9gb6fiI/400x400",
        },
        {
          nombre: "Carajillo",
          precio: "$ 9.000",
          categoria: "Bebidas Calientes",
          detalle: "Tinto con un trago de aguardiente.",
          imagen: "https://source.unsplash.com/l9lEy_JXiLM/400x400",
        },
        {
          nombre: "Canelazo",
          precio: "$ 9.000",
          categoria: "Bebidas Calientes",
          detalle: "Aguadepanelam con canela y aguardiente.",
          imagen: "",
        },
        {
          nombre: "Vino Caliente",
          precio: "$ 15.000",
          categoria: "Bebidas Calientes",
          detalle: "Lo mejor para compatir.",
          imagen: "",
        },
      ]
    }
  },
}
</script>

<style>

</style>