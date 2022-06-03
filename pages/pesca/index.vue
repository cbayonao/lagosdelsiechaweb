<template>
<div>
    <v-card height="100%" class="mb-2">
      <v-img height="100%" src="https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/lagopesca.jpg?alt=media&token=7d797d27-1ac0-4071-9ea5-538e9f2cce70" alt="">
      <v-card-title> Horarios de atención: </v-card-title>
      <v-card-text class="d-flex text-justify">
        Los lagos de pesca estan abiertos, normalmente, todos los fines de semana y festivos del año incluyendo semana santa, 25 de Diciembre y 1 de Enero.
      </v-card-text>
      </v-img>
    </v-card>
    <v-card class="mb-2">
        <v-card-title>
          <div class="no-break">
            Nuestros precios para el ingreso a los lagos de pesca:
          </div>
        </v-card-title>
        <v-card-text>
            <ssimpletable />
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
      <v-card-title> 
        <div class="no-break">
          Reservas para los lagos de pesca: 
        </div>
        </v-card-title>
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
  methods: {
    goTo360() {
      this.$router.push({ name: '360' });
    }
  }
    
}
</script>

<style scoped>
.no-break {
  white-space: normal;
  word-break: keep-all;
}
</style>