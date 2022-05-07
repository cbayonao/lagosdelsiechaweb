<template>
  <v-carousel v-model="img">
    <v-carousel-item
      v-for="(img, i) in imgs"
      :key="i"
      :src="`https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o${img}`"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      img: 0,
    };
  },
  props: {
    imgs: {
      type: Array,
      required: true,
    },
  },
};
</script>