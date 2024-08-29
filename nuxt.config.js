import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  //   <!-- Meta Pixel Code -->
  // <script>
  //   !function(f,b,e,v,n,t,s)
  //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //   n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t,s)}(window, document,'script',
  //   'https://connect.facebook.net/en_US/fbevents.js');
  //   fbq('init', '348775634048215');
  //   fbq('track', 'PageView');
  // </script>
  // <noscript><img height="1" width="1" style="display:none"
  //   src="https://www.facebook.com/tr?id=348775634048215&ev=PageView&noscript=1"
  // /></noscript>
  // <!-- End Meta Pixel Code -->
  head: {
    titleTemplate: '%s - Home',
    title: 'Lagos del Siecha App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/nuxt-facebook-pixel-module
    'nuxt-facebook-pixel-module',
  ],
  // <!-- Meta Pixel Code -->
  // <script>
  //   !function(f,b,e,v,n,t,s)
  //   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //   n.queue=[];t=b.createElement(e);t.async=!0;
  //   t.src=v;s=b.getElementsByTagName(e)[0];
  //   s.parentNode.insertBefore(t,s)}(window, document,'script',
  //   'https://connect.facebook.net/en_US/fbevents.js');
  //   fbq('init', '1079349492658373');
  //   fbq('track', 'PageView');
  // </script>
  // <noscript><img height="1" width="1" style="display:none"
  //   src="https://www.facebook.com/tr?id=1079349492658373&ev=PageView&noscript=1"
  // /></noscript>
  // <!-- End Meta Pixel Code -->
  facebook: {
    track: 'PageView',
    pixelId: '1079349492658373',
    autoPageView: true,
    disabled: false,
    pixels: [
      {
        pixelId: '1079349492658373',
        routes: [
          '/',
          '/restaurante/*',
          '/pesca',
          '/eventos',
        ]
      }
    ],
  },

  pwa: {
    manifest: {
      name: 'Lagos del Siecha',
      short_name: 'Lagos del Siecha App',
      lang: 'es',
      description: 'Pesca de Trucha, Restaurante y Centro de Convenciones',
      display: 'standalone',
      background_color: colors.grey.darken4,
      theme_color: colors.grey.darken4,
      start_url: '/',
    },
    icon: {
      source: 'static/logo.png',
      sizes: [96, 128, 192, 256, 384, 512],
      targetDir: 'img/icons',
    },
    meta: {
      ogiconHost: 'https://lagosdelsiecha.com',
      ogImage: 'https://lagosdelsiecha.com/static/logo.png',
      ogTitle: 'Lagos del Siecha',
      ogDescription: 'Pesca de Trucha, Restaurante y Centro de Convenciones',
      ogUrl: 'https://lagosdelsiecha.com',
      ogType: 'website',
      ogLocale: 'es_ES',
      twitterCard: 'summary_large_image',
      twitterSite: '@lagosdelsiecha',
      twitterTitle: 'Lagos del Siecha',
      twitterDescription: 'Pesca de Trucha, Restaurante y Centro de Convenciones',
      twitterImage: 'https://lagosdelsiecha.com/static/logo.png',
      twitterUrl: 'https://lagosdelsiecha.com',
      twitterLocale: 'es_ES',
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL_PROD || process.env.API_URL_DEV || 'http://localhost:4010',
    // baseURL: process.env.API_URL_DEV,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'es'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
