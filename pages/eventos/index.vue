<template>
  <stab />
</template>

<script>
import Stab from '../../components/Stab.vue'
export default {
  components: { Stab },
  methods: {
    goTo360() {
      this.$router.push({ name: '360' });
    }
  }
};
</script>

<style scoped>
</style>