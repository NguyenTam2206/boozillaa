<template>
  <v-app>
    <Navigation />
    <v-content style="margin-top: 55px;">
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
export default {
  name : 'Default',
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
