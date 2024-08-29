<template>
  <div>
    <v-card class="mb-2">
      <v-card-title> Horarios de atención: </v-card-title>
      <v-card-text class="d-flex text-justify">
        Los estaremos atendiendo todos los Sabados, Domingos y festivos del año,
        desde las 8:00 AM, hasta las 6:00 PM, en semana santa atendemos de
        martes a domingo santo.
      </v-card-text>
    </v-card>
    <v-card class="mb-2">
      <v-card-title> Nuestra carta: </v-card-title>
      <v-card-text>
        <image-card
          :title="'Desayunos'"
          :subtitle="'Para empezar el día'"
          :src="'https://source.unsplash.com/hrlvr2ZlUNk/600x600'"
          :alt="'Desayuno'"
          :to="'/restaurante/desayunos'"
        />
        <image-card
          :title="'Cremas'"
          :subtitle="'Deliciosas cremas naturales, hechas por nuestro chef.'"
          :src="'https://source.unsplash.com/j3FidswVdQk/600x600'"
          :alt="'cremas'"
          :to="'/restaurante/cremas'"
        />
        <image-card
          :title="'Entradas'"
          :subtitle="'Para abrir el apetito'"
          :src="'https://source.unsplash.com/M56xme21M7I/600x600'"
          :alt="'Entrada'"
          :to="'/restaurante/entradas'"
        />
        <image-card
          :title="'Truchas'"
          :subtitle="'Nuestro plato recomendado'"
          :src="'https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2FT_ajillo.jpg?alt=media&token=5d36887c-6195-4292-9cc1-012e02853d18'"
          :alt="'Trucha'"
          :to="'/restaurante/truchas'"
        />
        <image-card
          :title="'Carnes'"
          :subtitle="'Cortes de carne de res seleccionada'"
          :src="'https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2FDSC_0136%20(1).jpg?alt=media&token=8174e5b2-8ba7-4d47-8e9e-b1afec4146ca'"
          :alt="'Carnes'"
          :to="'/restaurante/carnes'"
        />
        <image-card
          :title="'Pollos'"
          :subtitle="'Deliciosas preparaciones de nuestro chef'"
          :src="'https://source.unsplash.com/ZWwKNNeoKE8/600x600'"
          :alt="'Pollos'"
          :to="'/restaurante/pollos'"
        />
        <image-card
          :title="'Menu infantil'"
          :subtitle="'Para nuestros niños y niñas pescadores.'"
          :src="'https://source.unsplash.com/j3FidswVdQk/600x600'"
          :alt="'Menu infantil'"
          :to="'/restaurante/menuinfantil'"
        />
        <image-card
          :title="'Pastas'"
          :subtitle="'Al pesto para vegetarianos, o en carbonara'"
          :src="'https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2Fpasata_pesto.jpg?alt=media&token=dee362fb-810b-43b9-867d-ebf168be9941'"
          :alt="'Pastas'"
          :to="'/restaurante/pastas'"
        />
        <image-card
          :title="'Postres'"
          :subtitle="'Sencillos pero de admirar'"
          :src="'https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/restaurante%2Fmatrimonio.jpg?alt=media&token=962b292b-e9f2-4ef3-a1d4-977b1499de46'"
          :alt="'Postres'"
          :to="'/restaurante/postres'"
        />
        <image-card
          :title="'Bebidas frias'"
          :subtitle="'Distintos sabores de pura fruta'"
          :src="'https://source.unsplash.com/8vEV1BrHNXE/600x600'"
          :alt="'Bebidas frias'"
          :to="'/restaurante/bebidasfrias'"
        />
        <image-card
          :title="'Bebidas calientes'"
          :subtitle="'Para un dia de frío'"
          :src="'https://source.unsplash.com/54hUU5pNSvo/600x600'"
          :alt="'Bebidas calientes'"
          :to="'/restaurante/bebidascalientes'"
        />
      </v-card-text>
    </v-card>
    <v-card class="mb-2">
      <v-card-title>
        <div class="no-break">
          Vista 360 a nuestro sitio
        </div>
      </v-card-title>
      <v-card-subtitle>
        <div class="no-break">
          Sumergete en nuestra experiencia 360
        </div>
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="goTo360()" color="primary" text>
          Ir a 360
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card class="mb-2">
      <v-card-title> Reservas para el restaurante: </v-card-title>
      <v-card-text>
        <sreservation-res />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import ImageCard from "../../components/ImageCard.vue";
import Sdataiterator from "../../components/Sdataiterator.vue";
import SreservationRes from "../../components/SreservationRes.vue";
export default {
  components: { Sdataiterator, SreservationRes, ImageCard },
  methods: {
    goTo360() {
      this.$router.push({ name: '360' });
    }
  }
};
</script>

<style scoped>
</style>