<template>
  <v-lazy>
    <v-card class="mx-auto" max-width="100%" flat @click="$router.push('/product/aaa')">
      <!-- <div @mouseover="onHover = true" @mouseleave="onHover = false">
      <v-img v-if="!onHover" class="white--text align-end" :src="product.img" height="auto"></v-img>
      <v-img v-if="onHover" class="white--text align-end" :src="product.imgOnHover" height="auto"></v-img>
      </div>-->
      <v-img class="white--text align-end" :src="product.img" height="auto"></v-img>
      <v-card-text class="text--primary text-center pt-1 pb-1" style="background-color: #E6E7E8;">
        <div class="text-uppercase">{{product.title}}</div>
        <h4>{{product.prize}}</h4>
      </v-card-text>
    </v-card>
  </v-lazy>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {
        return {
          img: require("../../assets/imgs/product.png"),
          imgOnHover: require("../../assets/imgs/producthoverimg.png"),
          title: "Áo Phông Boo ABCDEF",
          prize: "399.000 đ"
        };
      }
    }
  },
  data() {
    return {
      // onHover: false,
      // product: {
      //   img: require("../../assets/imgs/product.png"),
      //   imgOnHover: require("../../assets/imgs/producthoverimg.png"),
      //   title: "Áo Phông Boo ABCDEF",
      //   prize: "399.000 đ"
      // }
    };
  },
  methods: {
    // hover() {
    //   this.product.imgShow = this.product.imgOnHover;
    // },
    // leave() {
    //   this.product.imgShow = this.product.img;
    // }
  }
};
</script>

<style scoped>
</style>