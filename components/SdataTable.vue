<template>
  <v-data-table
    :headers="headers"
    :items="reservations"
    sort-by="date"
    class="elevation-1"
    dense
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nueva reserva
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.client_name"
                      label="Nombre de quien reserva"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="4">
                    <v-text-field
                      v-model="editedItem.date"
                      label="Fecha de la reserva"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.time"
                      label="Hora de la reserva"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.number_people"
                      label="Cuantas personas?"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.client_email"
                      label="Correo de quien reserva"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.client_phone"
                      label="Teléfono de quien reserva"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="12">
                    <v-select
                      v-model="editedItem.reserva_para"
                      :items="items"
                      :rules="[(v) => !!v || 'Es necesario elegir una opción']"
                      label="Reserva para:"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Guardar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Quieres eliminar esta reserva?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancelar</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm(item)"
                >Sí</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogShow" max-width="500px">
          <v-card>
            <v-card-title>
              Detalles de la reserva de {{ itemDetails.client_name }}
            </v-card-title>
            <v-card-text>
              <v-list dense>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-more</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>Detalles</v-list-item-subtitle>
                    <div v-if="itemDetails.details">
                      {{ itemDetails.details }}
                    </div>
                    <div v-else>No hay detalles</div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                v-if="itemDetails.client_phone"
                @click="callPhone(itemDetails.client_phone)"
                rounded
                text
              >
                <v-icon>mdi-phone</v-icon>
              </v-btn>
              <v-btn
                @click="sendEmailClient(itemDetails.client_email)"
                rounded
                text
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
              <v-btn rounded color="error" @click="closeShow">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-btn x-small fab icon>
        <v-icon color="#148F77" size="20" @click="editItem(item)"> mdi-pencil </v-icon>
      </v-btn>
      <!-- <v-btn x-small fab icon>
        <v-icon color="#229954" size="20" @click="deleteItem(item)"> mdi-delete </v-icon>
      </v-btn> -->
      <v-btn x-small fab icon>
        <v-icon color="#D4AC0D" size="20" @click="showDetails(item)"> mdi-dots-horizontal </v-icon>
      </v-btn>
      <v-btn :loading="sendConfirmation" x-small fab icon :disabled="item.is_confirmed">
        <v-icon color="#BA4A00" size="20" @click="confirmReservation(item)"> mdi-email-fast </v-icon>
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>


<script>
export default {
  data: () => ({
    sendConfirmation: false,
    itemDetails: {},
    select: null,
    items: ["Restaurante", "Pesca"],
    reservations: [],
    dialog: false,
    dialogDelete: false,
    dialogShow: false,
    headers: [
      {
        text: "Id",
        align: "start",
        value: "id",
      },
      {
        text: "Nombre del cliente",
        align: "start",
        sortable: false,
        value: "client_name",
      },
      { text: "Fecha de la reserva", value: "date" },
      { text: "Hora de la reserva", value: "time" },
      { text: "Número de personas", value: "number_people" },
      { text: "Reserva para", value: "reserva_para" },
      //   { text: "Detalles", value: "details", sortable: false },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    editedIndex: -1,
    editedItem: {
      id: null,
      client_name: "",
      date: "",
      time: "",
      number_people: 0,
      client_email: "",
      client_phone: "",
      details: "",
      reserva_para: "",
      isRestaurant: false,
      isFishing: false,
    },
    defaultItem: {
      id: null,
      client_name: "",
      date: "",
      time: "",
      number_people: 0,
      client_email: "",
      client_phone: "",
      details: "",
      reserva_para: "",
      isRestaurant: false,
      isFishing: false,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nueva Reserva" : "Editar Reserva";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    sendEmailClient(email) {
      window.open(`mailto:${email}`);
    },
    closeShow() {
      this.dialogShow = false;
    },
    callPhone(phone) {
      window.open(`tel:${phone}`);
    },
    async getReservations() {
      const res = await this.$store.dispatch("getReservations");
      console.log(res.data)
      this.reservations = res.data.map(
        ({
          id,
          client_name,
          date,
          time,
          number_people,
          details,
          isFishing,
          isRestaurant,
          client_email,
          client_phone,
          is_confirmed,
        }) => ({
          id,
          client_name,
          date,
          time,
          number_people,
          details,
          reserva_para: isFishing ? "Pesca" : isRestaurant ? "Restaurante" : "",
          client_email,
          client_phone,
          isRestaurant,
          isFishing,
          is_confirmed,
        })
      );
    },

    initialize() {
      this.getReservations();
    },

    async editItem(item) {
      this.editedIndex = this.reservations.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    showDetails(item) {
      this.detailsIndex = this.reservations.indexOf(item);
      this.itemDetails = Object.assign({}, item);
      this.dialogShow = true;
    },

    async confirmReservation(item) {
      this.sendConfirmation = true;
      const res = await this.$store.dispatch("confirmReservation", item);
      this.getReservations();
      this.sendConfirmation = false;
    },

    deleteItem(item) {
      //   id = item.id;
      this.editedIndex = this.reservations.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm(item) {
      this.reservations.splice(this.editedIndex, 1);
      //   const res = await this.$store.dispatch("deleteReservation", item.id);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        console.log("Editando");
        Object.assign(this.reservations[this.editedIndex], this.editedItem);
        console.log("Probando", this.editedItem);
        const res = await this.$store.dispatch(
          "updateReservation",
          this.editedItem
        );
      } else {
        console.log("Agregando");
        this.reservations.push(this.editedItem);
        delete this.editedItem.id;
        if (this.editedItem.reserva_para === "Pesca") {
          this.editedItem.isFishing = true;
          this.editedItem.isRestaurant = false;
        } else if (this.editedItem.reserva_para === "Restaurante") {
          this.editedItem.isFishing = false;
          this.editedItem.isRestaurant = true;
        }
        delete this.editedItem.reserva_para;
        const res = await this.$store.dispatch(
          "createReservation",
          this.editedItem
        );
      }
      this.close();
    },
  },

  mounted() {},
};
</script>