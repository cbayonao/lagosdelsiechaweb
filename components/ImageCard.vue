<template>
  <v-card flat link :to="to" height="150px" width="100%" class="mb-4">
    <v-img
      gradient="rgb(246, 233, 126, 30%) 0%,  rgb(23, 23, 49, 70%) 100%"
      class="white--text align-end justify-end mb-4"
      height="150px"
      :src="src"
      :alt="alt"
    >
      <v-card-title>
        <div class="text-subtitle-1 no-break">
          {{ title }}
        </div>
      </v-card-title>
      <v-card-subtitle>
        <div class="text-caption no-break">
          {{ subtitle }}
        </div>
      </v-card-subtitle>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
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