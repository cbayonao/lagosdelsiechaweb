<template>
  <v-card>
    <v-card-title>
      <h1>Bebidas frías</h1>
    </v-card-title>
    <v-card-text>
      <sdataiterator :items="bebidasfrias" />
    </v-card-text>
    <v-card-actions>
      <comeback />
    </v-card-actions>
  </v-card>
</template>

<script>
import comeback from "../../../components/comeback.vue";
export default {
  components: { comeback },
  data() {
    return {
      bebidasfrias: [
        {
          nombre: "Limonada de coco, yerbabuena o cerezada",
          precio: "$ 9.000",
          categoria: "Bebidas frias",
          detalle: "Limonadas recién hechas, todas son una delicia.",
          imagen: "",
        },
        {
          nombre: "Limonada natural",
          precio: "$ 9.000",
          categoria: "Bebidas frias",
          detalle: "Ideal para calmar tu sed.",
          imagen: "",
        },
        {
          nombre: "Gaseosa en vaso 330ml",
          precio: "$ 9.000",
          categoria: "Bebidas frias",
          imagen: "",
        },
        {
          nombre: "Jugos naturales de 100% fruta",
          precio: "$ 9.000",
          categoria: "Bebidas frias",
          detalle: "Estos si son de pura fruta!",
          imagen: "",
        },
        {
          nombre: "Cerveza Poker",
          precio: "$ 7.000",
          categoria: "Bebidas frias",
          imagen:
            "https://www.eltiempo.com/files/article_main/uploads/2018/08/21/5b7cc90bb99c6.jpeg",
        },
        {
          nombre: "Cerveza Club Colombia",
          precio: "$ 8.500",
          categoria: "Bebidas frias",
          imagen:
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b1b44215402823.562909633f131.jpg",
        },
      ],
    };
  },
};
</script>

<style>
</style>