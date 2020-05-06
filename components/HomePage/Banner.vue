<template>
  <v-carousel cycle height="auto" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        { src: require("../../assets/imgs/bannerslide1.png") },
        { src: require("@/assets/imgs/bannerslide2.png") }
      ]
    };
  }
};
</script>
