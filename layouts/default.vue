<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="false"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="true" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn class="mt-2" to="/" exact router nuxt link icon dark fab plain>
        <img :src="require('../assets/images/logo-siecha.png')" height="60" />
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="false" app>
      <span
        >&copy; Todos los derechos reservados.
        {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-human-greeting",
          title: "Bienvenido",
          to: "/",
        },
        {
          icon: "mdi-silverware",
          title: "Restaurante",
          to: "/restaurante",
        },
        {
          icon: "mdi-fish",
          title: "Pesca",
          to: "/pesca",
        },
        {
          icon: "mdi-party-popper",
          title: "Eventos",
          to: "/eventos",
        },
        // {
        //   icon: 'mdi-newspaper',
        //   title: 'Reservas',
        //   to: '/reservas'
        // },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Lagos del Siecha logo",
    };
  },
};
</script>
