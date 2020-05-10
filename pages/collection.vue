<template>
  <v-container>
    <BCCollection />
    <v-col cols="12" md="8" offset-md="2">
      <v-row>
        <v-col cols="3" v-for="(img,i) in licenseImgs" :key="i" class="bg">
          <nuxt-link :to="img.link" class="link"><v-img :src="img.src" class="img"></v-img></nuxt-link>
        </v-col>
      </v-row>
    </v-col>
    <nuxt-child />
     <PageIconInfo />
  </v-container>
</template>

<script>
import BCCollection from "@/components/Breadcrums/BCCollection";
import PageIconInfo from "@/components/PageIconInfo/PageIconInfo";

export default {
  components: {
    BCCollection,
    PageIconInfo
  },
  data() {
    return {
      licenseImgs: [
        {
          src: require("../assets/imgs/disneylicense.png"),
          link: "/collection/disney"
        },
        {
          src: require("../assets/imgs/marvellicense.png"),
          link: "/collection/marvel"
        },
        {
          src: require("../assets/imgs/starwarlicense.png"),
          link: "/collection/starwars"
        },
        {
          src: require("../assets/imgs/onelicense.png"),
          link: "/collection/one-piece-stampede"
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg {
    background-color: rgb(241,241,241);
    border-right : 1px solid white;
    padding-top : 20px;
}
.img {
    filter : grayscale(100%);
    opacity: .2;
}

.exact-active-link .img{
    filter: grayscale(0);
    opacity: 1;
}

.exact-active-link > .bg{
    background-color: white;
}

</style>