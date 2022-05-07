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
          label="Indícanos la hora..."
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
        format="24hr"
        full-width
        @click:minute="$refs.menu.save(time)"
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
      prepend-icon="mdi-phone"
      :rules="phoneNumberRules"
      label="Teléfono..."
      required
      type="tel"
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
      v-model="isSpecial"
      prepend-icon="mdi-party-popper"
      :label="`Tienes pensado algo especial en los lagos?`"
    ></v-switch>

    <div v-if="isSpecial">
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
    valid: true,
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
    isSpecial: false,
    isRestaurant: false,
    isFishing: true,
    celebrationDetails: "",
    isSend: false,
    snackbar: false,
    snackBarText: "",
  }),

  methods: {
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
    allowedHours: (v) => v % 2,
    allowedMinutes: (v) => v >= 10 && v <= 50,
    allowedStep: (m) => m % 10 === 0,
    async sendReservation() {
      this.isSend = true;
      this.$refs.form.validate();
      const { name, email, phoneNumber, numberPeople, fromDateDisp, time } =
        this;
      const { isSpecial, celebrationDetails, isRestaurant, isFishing } = this;
      const data = {
        name,
        email,
        phoneNumber,
        numberPeople,
        fromDateDisp,
        time,
        isSpecial,
        isRestaurant,
        isFishing,
        'details': celebrationDetails,
      };
      const res = await this.$store.dispatch("sendEmail", data);
      if (res) {
        this.isSend = true;
        this.reset();
        this.snackBarText = "¡Tu reserva ha sido enviada!";
        this.snackbar = true;
      } else {
        this.isSend = false;
        this.snackBarText = "¡Ocurrió un error al enviar tu reserva!";
        this.snackbar = true;
      }
      //   const response = await fetch("/api/reservations", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   });
      //   const json = await response.json();
    },
  },

  mounted() {
    this.minDate = this.getTodayDate();
    this.maxDate = this.getOneYearMore();
  },

  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    },
    fromTimeDisp() {
      return this.fromTimeVal;
    },
  },
};
</script>

<style scoped>
</style>