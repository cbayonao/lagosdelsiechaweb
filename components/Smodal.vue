<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>
        <v-card-text>
            {{ content }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="handleDialog()">
            Salir
          </v-btn>
          <v-btn @click="action" color="green darken-1" outlined>
            {{ btnTxt }}
            <v-icon right>{{ icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    handleDialog: Function,
    title: String,
    content: String,
    btnTxt: String,
    icon: String,
    action: Function
  },
};
</script>

<style scoped>
</style>