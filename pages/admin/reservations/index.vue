<template>
  <v-card>
    <v-card-title> Reservas de Lagos del Siecha </v-card-title>
    <v-card-text>
      <sdata-table />
    </v-card-text>
  </v-card>
</template>

<script>
import SdataTable from "../../../components/SdataTable.vue";
export default {
  components: { SdataTable },
  methods: {
  },
  
};
</script>

<style scoped>
</style>