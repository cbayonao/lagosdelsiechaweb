<template>
  <v-card>
    <v-img :src="'https://source.unsplash.com/random/400x400'">
      <v-card-title>
        <div class="text-center">Muy pronto....</div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="goTo360()" color="primary" text>
          Ir a 360
        </v-btn>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  methods: {
    goTo360() {
      this.$router.push({ name: '360' });
    }
  }
};
</script>

<style scoped>
</style>