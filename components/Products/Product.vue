<template>
  <v-card class="mx-auto" max-width="100%" flat>
    <v-img class="white--text align-end" :src="img" height="auto"></v-img>

    <v-card-text class="text--primary text-center pt-1 pb-1" style="background-color: #E6E7E8;">
      <div class="text-uppercase">Áo Phông Boo ABCDEF</div>
      <h4>399.000 đ</h4>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/imgs/product.webp")
    };
  }
};
</script>

<style scoped>
</style>