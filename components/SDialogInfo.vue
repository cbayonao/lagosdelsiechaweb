<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" open-delay="50000" max-width="800px">
      <v-card>
        <v-img src="https://source.unsplash.com/1600x900/?trout">
        <div class="bg-transparent">
            <v-card-title>
            <span class="text-h5">Comunicado a nuestros usuarios</span>
          </v-card-title>
          <v-card-subtitle>
            <span class="text-caption">
              Acerca de la Sentencia C-148, 27/04/2022. Mediante la cual se
              declaró inconstitucional la pesca deportiva en Colombia.
            </span>
          </v-card-subtitle>
          <v-card-text class="text-justify">
            La pesca es una actividad que ha desarrollado el hombre durante
            miles de años, con la finalidad de satisfacer sus necesidades de
            alimentación.
          </v-card-text>
          <v-card-text class="text-justify">
            En Colombia mediante la ley 13 de 1990, se establece la regulación
            general de la pesca y en ella se distinguieron diferentes tipos de
            pesca, entre los cuales encontramos la pesca deportiva y la pesca
            comercial.
          </v-card-text>
          <v-card-text class="text-justify">
            La Autoridad Nacional de Acuicultura y Pesca mediante Resolución
            2609 de 2020 ha definido a la pesca deportiva como "aquella que se
            realiza con fines de recreación y esparcimiento" y esta [...] "solo
            podrá ser realizada sin ánimo de lucro, por lo que ninguno de los
            especímenes capturados podrá ser comercializado".
          </v-card-text>
          <v-card-text class="text-justify">
            Por otro lado la pesca comercial podrá ser industrial o artesanal,
            siendo la Pesca Artesanal aquella que prácticamos en nuestras
            instalaciones.
          </v-card-text>
          <v-card-text class="text-justify">
            La Pesca Comercial Artesanal de Trucha Arcoiris
            <b>NO HA SIDO PROHIBIDA</b> en Colombia por lo que
            <b>NUESTRA ACTIVIDAD SIGUE SIENDO PERMITIDA</b>, debido a que se
            realiza con fines comerciales y de alimentación para la especie
            humana y prohibirlo seria atentar contra la especie humana misma.
          </v-card-text>
        </div>
        </v-img>
        <v-card-text class="mt-4">
          <v-card>
            <v-img
              src="https://firebasestorage.googleapis.com/v0/b/lagos-del-siecha.appspot.com/o/pesca-antigua.jpg?alt=media&token=ab96c2db-8b37-489c-823d-d3ec9f26d271"
              height="200"
              contain
            ></v-img>
            <v-card-title class="text-caption">
              <div class="no-break">
                Se considera que éste es el cuadro más viejo de pesca con caña.
                Son pescadores egipcios del año 2,000 a. C. (tomado de P. E.
                Newsberry, Ben Hasan).
              </div>
            </v-card-title>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style scoped>
div.no-break {
  white-space: normal;
  word-break: keep-all;
}

div.bg-transparent {
  background-color: rgb(145, 128, 116, 80%);
  margin: 2rem;
}
</style>