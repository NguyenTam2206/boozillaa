<template>
  <v-app>
    <Navigation />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Navigation,
    Footer
  }
};
</script>

<style scoped>
</style>
