<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3" v-for="(product,i) in productsList.slice(0, quantity)" :key="i">
        <Product :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from "./Product";
export default {
  components: {
    Product
  },
  props: {
    quantity: {
      type: String
    },
    productsList: {
      type: Array,
      default: () => {
        return [
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          },
          {
            img: require("../../assets/imgs/product.png"),
            imgOnHover: require("../../assets/imgs/producthoverimg.png"),
            title: "Áo Phông Boo ABCDEF",
            prize: "399.000 đ"
          }
        ];
      }
    }
  }
};
</script>