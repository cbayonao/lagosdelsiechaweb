<template>
  <v-container fluid>
    <v-row dense justify="center" align="center">
      <v-col v-for="card in cards" :key="card.title" cols="12" :md="card.flex">
        <v-card flat v-if="card.title != 'Mapa' && card.title != 'Contáctanos'">
          <v-img
            gradient="to bottom, rgba(218, 240, 238,.1), rgba(9, 82, 86, .5)"
          >
            <v-card-title>
              <div class="text-h5">
                {{ card.title }}
              </div>
            </v-card-title>
            <v-card-subtitle>
              <div class="text-subtitle-1">
                {{ card.subtitle }}
              </div>
            </v-card-subtitle>
            <scarousel v-if="card.title != 'Contáctanos'" :imgs="card.imgs" />
          </v-img>
          <v-card-actions v-if="card.title == 'Restaurante'">
            <v-spacer />
            <span
              >Mira nuestra carta, y otros detalles para tus celebraciones
              especiales.</span
            >
            <v-btn to="/restaurante" class="ma-2" outlined fab color="primary">
              <v-icon>mdi-silverware-fork-knife</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-actions v-if="card.title == 'Pesca'">
            <span>Todos los detalles de la actividad de pesca, para todos los niveles.</span>
            <v-spacer />
            <v-btn to="/pesca" class="ma-2" outlined fab color="primary">
              <v-icon>mdi-hook</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-actions v-if="card.title == 'Eventos'">
            <span>Celebra tus eventos especiales, empresariales y familiares repirando aire puro.</span>
            <v-spacer />
            <v-btn to="/eventos" class="ma-2" outlined fab color="primary">
              <v-icon>mdi-party-popper</v-icon>
            </v-btn>
          </v-card-actions>
          <v-card-actions v-if="card.title == 'Map'">
            <v-spacer />
            <v-btn class="ma-2" outlined fab color="primary">
              <v-icon>mdi-newspaper-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card flat v-if="card.title == 'Mapa'">
          <v-card-title>
            <div class="text-h5">
              {{ card.title }}
            </div>
          </v-card-title>
          <v-card-subtitle>
            <div class="text-subtitle-1">
              {{ card.subtitle }}
            </div>
          </v-card-subtitle>
          <!-- <v-card-text> -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6336.468858551867!2d-73.89251201434668!3d4.800320637932962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4d0d6422038eece!2sLagos%20del%20Siecha%20restaurante%20y%20pesca%20deportiva!5e1!3m2!1ses!2sco!4v1649786492349!5m2!1ses!2sco"
            width="100%"
            height="495"
            style="border: 0"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!-- </v-card-text> -->
          <v-card-actions>
            <span
              >Has click en el botón para ir a Google maps o a Waze con la ruta.</span
            >
            <v-spacer />
            <v-btn
              link
              href="https://maps.google.com/maps/dir//Lagos+del+Siecha+restaurante+y+pesca+deportiva+Sector+Paso+Hondo+Vda.+La+Trinidad,+Guasca,+Cundinamarca/@4.7991617,-73.8918757,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8e3f8b9e60c90559:0xd4d0d6422038eece"
              target="_blank"
              class="ma-2"
              outlined
              fab
              color="primary"
            >
              <v-icon>mdi-google-maps</v-icon>
            </v-btn>
            <v-btn
              link
              href="https://ul.waze.com/ul?preview_venue_id=187498544.1875050976.1123253&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
              target="_blank"
              class="ma-2"
              outlined
              fab
              color="#93c4d3"
            >
              <v-icon>mdi-waze</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card flat v-if="card.title == 'Contáctanos'">
          <v-img
            gradient="to bottom, rgba(218, 240, 238,.1), rgba(9, 82, 86, .5)"
          >
            <v-card-title>
              <div class="text-h5">
                {{ card.title }}
              </div>
            </v-card-title>
            <v-card-subtitle>
              <div class="text-subtitle-1">
                {{ card.subtitle }}
              </div>
            </v-card-subtitle>
          </v-img>
          <v-card-actions
            class="d-flex justify-center"
            v-if="card.title == 'Contáctanos'"
          >
            <v-btn
              @click="dialogPhone = true"
              class="ma-2"
              outlined
              fab
              color="#F4B400"
            >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
            <v-btn
              @click="dialogEmail = true"
              class="ma-2"
              outlined
              fab
              color="#4285F4"
            >
              <v-icon>mdi-at</v-icon>
            </v-btn>
            <v-btn
              @click="openWhatsApp"
              class="ma-2"
              outlined
              fab
              color="#0F9D58"
            >
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <smodal
      :dialog="dialogPhone"
      :handleDialog="handleDialogPhone"
      :title="'Número de contacto:'"
      :content="'+57 310 772 5161'"
      :btnTxt="'llamar'"
      :icon="'mdi-phone'"
      :action="callSiecha"
    />
    <smodal
      :dialog="dialogEmail"
      :handleDialog="handleDialogEmail"
      :title="'Nuestro email:'"
      :content="'lagosdelsiecha@gmail.com'"
      :btnTxt="'Enviar correo'"
      :icon="'mdi-at'"
      :action="emailSiecha"
    />
  </v-container>
</template>

<script>
import Scarousel from "../components/Scarousel.vue";
import Smodal from "../components/Smodal.vue";
export default {
  components: { Scarousel, Smodal },
  name: "IndexPage",
  data: () => ({
    cards: [
      {
        title: "Lagos del Siecha",
        subtitle:
          "Pesca de Trucha, Restaurante - Bar y Centro de Convenciones.",
        imgs: [
          "/lagosdelsiecha.jpg?alt=media&token=79af373e-a073-4f77-8560-d1bc413389c5",
          "/WhatsApp%20Image%202020-02-27%20at%209.02.54%20AM%20(1).jpeg?alt=media&token=989fa45e-356c-49ea-b8c8-4aeb59516445",
          "/WhatsApp%20Image%202020-02-27%20at%209.02.54%20AM.jpeg?alt=media&token=d8e58f12-9ee2-4bc5-89ee-7f5e667e64d0",
          "WhatsApp%20Image%202020-02-27%20at%209.02.55%20AM%20(1).jpeg?alt=media&token=9413edb0-be81-4f55-a4b4-1c860c1406a5",
        ],
        flex: 12,
        sm: 12,
      },
      {
        title: "Restaurante",
        subtitle:
          "Deliciosa Trucha, pero contamos con platos para todos los gustos",
        imgs: [
          "/WhatsApp%20Image%202020-07-01%20at%205.47.52%20PM.jpeg?alt=media&token=4b36c77a-2482-4e9f-9a40-7a23610ba4bb",
          "/WhatsApp%20Image%202020-07-01%20at%205.47.52%20PM%20(1).jpeg?alt=media&token=eb34179a-8f1e-4044-94f1-cfac029c98bd",
          "/WhatsApp%20Image%202020-07-01%20at%205.47.51%20PM.jpeg?alt=media&token=14abe113-143c-4c59-8859-f0f47f7ce1ee",
          "/WhatsApp%20Image%202020-07-01%20at%205.47.51%20PM%20(1).jpeg?alt=media&token=86862d1d-c03f-4ba5-85c9-a11c31e011d5",
          "/WhatsApp%20Image%202020-07-01%20at%205.47.50%20PM.jpeg?alt=media&token=ac9c2247-e8f1-4f0d-9fb1-d1a27f33d484",
        ],
        flex: 6,
        sm: 12,
      },
      {
        title: "Pesca",
        subtitle: "Disfruta de un plan de pesca, como nunca lo has vivido.",
        imgs: [
          "/lagosDelSiecha23.jpg?alt=media&token=fcfab794-7c5d-4d85-b8fe-4dc932e9798e",
          "/lagosDelSiecha17.jpg?alt=media&token=da2486ea-d974-4113-b1c6-dfbb22f5c0ca",
          "/WhatsApp%20Image%202020-07-04%20at%207.10.34%20PM.jpeg?alt=media&token=646339e9-0abf-4c9f-b8c7-bbbedf62dec4",
          "/WhatsApp%20Image%202020-07-01%20at%205.47.46%20PM.jpeg?alt=media&token=4262ca4c-3812-4199-aefa-037d7e3c4378",
        ],
        flex: 6,
        sm: 12,
      },
      {
        title: "Eventos",
        subtitle: "Gestión total de tus eventos especiales.",
        imgs: [
          "/WhatsApp%20Image%202020-07-01%20at%205.47.44%20PM.jpeg?alt=media&token=dc2fb69f-1d55-48f8-b1df-81fec740c8e7",
          "/WhatsApp%20Image%202020-07-01%20at%205.47.42%20PM.jpeg?alt=media&token=a5f8e74c-eecd-4c84-9c16-50b25dfe5ac1",
          "/WhatsApp%20Image%202020-02-27%20at%209.03.40%20AM%20(2).jpeg?alt=media&token=53da86e5-8c72-4f6b-9d6d-7ebbfaae4f3f",
          "/WhatsApp%20Image%202020-02-27%20at%209.03.40%20AM%20(1).jpeg?alt=media&token=299c3f54-00b1-418d-a2c0-4088e337b46e",
        ],
        flex: 12,
        sm: 12,
      },
      {
        title: "Mapa",
        subtitle: "Mira como puedes llegar desde donde te encuentres.",
        imgs: [],
        flex: 12,
        sm: 12,
      },
      {
        title: "Contáctanos",
        subtitle: "Tienes alguna inquietud, ponte en contacto con nosotros.",
        imgs: [],
        flex: 12,
        sm: 12,
      },
    ],
    dialogPhone: false,
    dialogEmail: false,
    dialogWhatsapp: false,
  }),
  methods: {
    handleDialogPhone() {
      this.dialogPhone = !this.dialogPhone;
    },
    handleDialogEmail() {
      this.dialogEmail = !this.dialogEmail;
    },
    handleDialogWhatsapp() {
      this.dialogWhatsapp = !this.dialogWhatsapp;
    },
    callSiecha() {
      window.open("tel:+573107725161");
    },
    emailSiecha() {
      window.open("mailto: lagosdelsiecha@gmail.com");
    },
    openWhatsApp() {
      window.open(
        "https://api.whatsapp.com/send?phone=573107725161&text=Hola,%20me%20gustaría%20más%20información%20sobre%20los%20servicios%20de%20Lagos%20del%20Siecha."
      );
    },
  },
};
</script>


<style scoped>
div.no-break {
  white-space: normal;
  word-break: keep-all;
}
</style>