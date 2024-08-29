<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="name"
      prepend-icon="mdi-account"
      :counter="30"
      :rules="nameRules"
      label="Nombre de quien reserva..."
      required
    ></v-text-field>
    <v-menu>
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="fromDateDisp"
          label="Indícanos el día de tu reserva..."
          prepend-icon="mdi-calendar-clock"
          readonly
          :value="fromDateDisp"
          v-on="on"
          :rules="reservationDateRules"
        ></v-text-field>
      </template>
      <v-date-picker
        locale="es-co"
        :min="minDate"
        :max="maxDate"
        :allowed-dates="allowedDates"
        v-model="fromDateVal"
        no-title
        @input="fromDateMenu = false"
      ></v-date-picker>
    </v-menu>

    <v-menu
      ref="menu"
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      :return-value.sync="time"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="time"
          :disabled="fromDateVal === null"
          label="Indicanos la hora..."
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
          :rules="reservationTimeRules"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="menu2"
        v-model="time"
        :allowed-minutes="allowedStep"
        :allowed-hours="allowedHours"
        full-width
        @click:minute="$refs.menu.save(time)"
        format="24hr"
      ></v-time-picker>
    </v-menu>

    <v-text-field
      v-model="email"
      prepend-icon="mdi-at"
      :rules="emailRules"
      label="Correo electrónico..."
      required
    ></v-text-field>

    <v-text-field
      v-model="phoneNumber"
      prepend-icon="mdi-at"
      :rules="phoneNumberRules"
      label="Teléfono..."
      required
    ></v-text-field>

    <v-text-field
      v-model="numberPeople"
      prepend-icon="mdi-account-group"
      :rules="numberPeopleRules"
      label="Para cuantas personas..."
      required
      type="number"
    ></v-text-field>

    <v-switch
      v-model="isPet"
      prepend-icon="mdi-paw"
      :label="`Traes tu mascota?`"
    ></v-switch>

    <v-switch
      v-model="isCelebration"
      prepend-icon="mdi-party-popper"
      :label="`Es una celebración especial? (Cumpleaños, Aniversario, etc.)`"
    ></v-switch>

    <div v-if="isCelebration">
      <span
        >Indícanos si deseas decoración personalizada, torta de celebración u
        otros detalles especiales.</span
      >
      <v-textarea
        v-model="celebrationDetails"
        name="input-7-1"
        label="Indícanos todos los detalles de tu evento..."
        auto-grow
        prepend-icon="mdi-comment-text-outline"
      >
      </v-textarea>
    </div>

    <v-checkbox
      v-model="checkbox"
      prepend-icon="mdi-checkbox-marked-circle-outline"
      :rules="[(v) => !!v || 'Debes aceptar para continuar!']"
      label="¿Estas de acuerdo con los terminos del servicio de reservas?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid || isSend"
      color="success"
      class="mr-4"
      @click="sendReservation()"
    >
      Enviar
    </v-btn>
    <ssnackbar :snackbar="snackbar" :text="snackBarText" />
    <!-- <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

    <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn> -->
  </v-form>
</template>

<script>
import Ssnackbar from "./Ssnackbar.vue";
export default {
  components: { Ssnackbar },
  data: () => ({
    resDates: [],
    resTimesByDate: [],
    snackbar: false,
    snackBarText: "",
    valid: false,
    name: "",
    nameRules: [
      (v) => !!v || "Nombre es requerido",
      (v) =>
        (v && v.length <= 30) || "El nombre debe tener menos de 30 cáracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "El correo es requerido.",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phoneNumber: "",
    phoneNumberRules: [
      (v) => !!v || "El teléfono es requerido.",
      (v) => /^\d+$/.test(v) || "El teléfono debe ser un número",
    ],
    numberPeople: null,
    numberPeopleRules: [
      (v) => !!v || "El número de personas es requerido.",
      (v) => v > 0 || "El número de personas debe ser mayor a 0.",
    ],
    reservationDate: "",
    reservationDateRules: [(v) => !!v || "La fecha de reserva es requerida."],
    reservationTime: "",
    reservationTimeRules: [(v) => !!v || "La hora de reserva es requerida."],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    time: null,
    menu2: false,
    fromDateVal: null,
    fromTimeVal: null,
    fromDateMenu: false,
    fromTimeMenu: false,
    minDate: "",
    maxDate: "",
    isCelebration: false,
    isRestaurant: true,
    isFishing: false,
    celebrationDetails: "",
    isSend: false,
    isPet: false,
  }),

  methods: {
    async getSumReservations() {
      const response = await this.$store.dispatch("getSumReservations");
      if (response.status === 200) {
        this.resDates = response.data;
        console.log("cbo: ", this.resDates);
      }
    },
    async getSumResByDate(date) {
      const res = await this.$store.dispatch("getSumResByDate", date);
      if (res.status === 200) {
        this.resTimesByDate = res.data;
      }
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getTodayDate() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    },
    getOneYearMore() {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0!
      let yyyy = today.getFullYear() + 1;
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      today = yyyy + "-" + mm + "-" + dd;
      return today;
    },
    allowedMinutes: (v) => v >= 10 && v <= 50,
    allowedStep: (m) => m % 30 === 0,
    allowedHours(v) {
      const currentTimes = this.resTimesByDate.map(
        ({ num_people_by_time, time_res }) => ({
          num: num_people_by_time,
          hour: Number(time_res.split(":")[0]),
        })
      );
      console.log("curr: ", currentTimes);
      let boolVal = true;
      if (v >= 10 && v <= 16) {
        boolVal = true;
      } else {
        boolVal = false;
      }
      for (let i = 0; i < currentTimes.length; i++) {
        const iTime = currentTimes[i];
        console.log("item: ", iTime);
        if (iTime.hour === v) {
          if (iTime.num > 80) {
            boolVal = false;
          }
        }
      }
      return boolVal;
    },
    allowedDates(val) {
      const dates = this.resDates;
      let boolVal = true;
      for (let i = 0; i < dates.length; i++) {
        const element = dates[i];
        if (element.res_date === val) {
          console.log(element.res_date);
          if (element.number_people_by_day > 300) {
            boolVal = false;
          }
        }
      }
      return boolVal;
    },

    async sendReservation() {
      this.isSend = true;
      this.$refs.form.validate();
      const { name, email, phoneNumber, numberPeople, fromDateDisp, time } =
        this;
      const { isPet, isCelebration, celebrationDetails, isRestaurant, isFishing } =
        this;
      const data = {
        name,
        email,
        phoneNumber,
        numberPeople,
        fromDateDisp,
        time,
        isPet,
        isCelebration,
        isRestaurant,
        isFishing,
        details: celebrationDetails,
      };

      const res = await this.$store.dispatch("sendEmail", data);
      if (res) {
        this.isSend = true;
        this.reset();
        this.snackBarText = "Tu reserva ha sido enviada";
        this.snackbar = true;
      } else {
        this.isSend = false;
        this.snackBarText = "Ha ocurrido un error, inténtalo más tarde";
        this.snackbar = true;
      }
    },
  },

  mounted() {
    this.$fb.enable();
    this.minDate = this.getTodayDate();
    this.maxDate = this.getOneYearMore();
    this.getSumReservations();
  },

  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    },
    fromTimeDisp() {
      return this.fromTimeVal;
    },
  },
  watch: {
    fromDateDisp(val) {
      console.log("Changed: ", val);
      this.getSumResByDate(val);
    },
  },
};
</script>

<style scoped>
</style>