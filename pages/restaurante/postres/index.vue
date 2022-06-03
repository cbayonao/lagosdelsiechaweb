<template>
  <v-card>
    <v-card-title>
      <h1>Postres</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="postres" />
    </v-card-text>
    <v-card-actions>
        <comeback />
    </v-card-actions>
  </v-card>
</template>

<script>
import comeback from '../../../components/comeback.vue'
import Sdataiterator from '../../../components/Sdataiterator.vue'
export default {
  components: { comeback, Sdataiterator },
  data() {
    return {
      postres: [
        
        {
          nombre: "Matrimonio",
          precio: "$ 18.000",
          categoria: "Postres",
          detalle: "Combinación de moras, fresas con arequipe y queso al horno.",
          imagen: "https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/WhatsApp%20Image%202020-07-01%20at%205.47.51%20PM%20(1).jpeg?alt=media&token=86862d1d-c03f-4ba5-85c9-a11c31e011d5",
        },
        {
          nombre: "Cuajada con melao o arequipe",
          precio: "$ 17.000",
          categoria: "Postres",
          detalle: "Cuajada bañada cpn arequipe o melao al horno.",
          imagen: "",
        },
        {
          nombre: "Gratinado",
          precio: "$ 14.000",
          categoria: "Postres",
          detalle: "Gratinado de queso mozzarella con arequipe.",
          imagen: "",
        },
        {
          nombre: "Mousse de frutos rojos",
          precio: "$ 18.000",
          categoria: "Postres",
          detalle: "Delicioso esponjado de frutos rojos.",
          imagen: "",
        },
        
      ]
    }
  },
}
</script>

<style>
</style>