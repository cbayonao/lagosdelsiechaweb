<template>
<div>
    <v-card class="mb-2">
      <v-card-title> Horarios de atención: </v-card-title>
      <v-card-text class="d-flex text-justify">
        Los lagos de pesca estan abiertos, normalmente, todos los fines de semana y festivos del año incluyendo semana santa, 25 de Diciembre y 1 de Enero.
      </v-card-text>
    </v-card>
    <v-card class="mb-2">
        <v-card-title>
            Nuestros precios para el ingreso a los lagos de pesca:
        </v-card-title>
        <v-card-text>
            <ssimpletable />
        </v-card-text>
    </v-card>
    <v-card class="mb-2">
      <v-card-title> Reservas para los lagos de pesca: </v-card-title>
      <v-card-text>
        <sreservation-pes />
      </v-card-text>
    </v-card>
</div>
</template>

<script>
import SreservationPes from '../../components/SreservationPes.vue'
import Ssimpletable from '../../components/Ssimpletable.vue'
export default {
  components: { SreservationPes, Ssimpletable },
    
}
</script>

<style scoped>

</style>