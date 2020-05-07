<template>
  <v-container class="d-md-flex" justify-center align-center style="height: 100%">
    <v-row>
      <v-col cols="7" md="3" v-for="(img, i) in licenseImgs" :key="i" class="imgwrap">
        <v-img  :src="img.src"  @click="$router.push(img.link)"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      licenseImgs: [
        {
          src: require("../../assets/imgs/disneylicense.png"),
          link: "/collection/disney"
        },
        {
          src: require("../../assets/imgs/marvellicense.png"),
          link: "/collection/marvel"
        },
        {
          src: require("../../assets/imgs/starwarlicense.png"),
          link: "/collection/starwars"
        },
        {
          src: require("../../assets/imgs/onelicense.png"),
          link: "/collection/one-piece-stampede"
        }
      ]
    };
  }
};
</script>

<style scoped>
  .imgwrap:hover {
    cursor: pointer;
  }
</style>

