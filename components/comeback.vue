<template>
  <v-btn @click="comeback()" color="error">
    <v-icon>mdi-chevron-left</v-icon>
    Regresar
  </v-btn>
</template>

<script>
export default {
    methods: {
        comeback() {
            this.$router.go(-1);
        },
    },
}
</script>

<style>

</style>