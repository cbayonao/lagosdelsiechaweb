<template>
  <div class="text-center ma-2">
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    text: {
      type: String,
      default: "Hello, I'm a snackbar",
    },
    snackbar: {
      type: Boolean,
      default: false,
    },
  },
};
</script>