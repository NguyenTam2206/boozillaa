<template>
  <div>
    <v-col cols="12" md="8" offset-md="2">
      <v-row class="text-center">
        <p>Con đường của bạn là gì? Tham gia vào Thần Lực, hay gia nhập vào phe Bóng Tối? Câu trả lời sẽ nằm ở bộ sưu tập BOO x Star Wars cho mùa Thu Đông 2019</p>
      </v-row>
    </v-col>
    <LoadProduct :quantity="8" v-if="isLoading" />
    <ProductsList :productsList="productsList" />
    <v-row justify="center" style="margin-bottom: 40px;">
      <v-btn outlined width="300">Xem Thêm</v-btn>
    </v-row>
  </div>
</template>

<script>
import ProductsList from "@/components/Products/ProductsList";
import LoadProduct from "@/components/Products/LoadProduct";

export default {
  components: {
    ProductsList,
    LoadProduct
  },
  created() {
    this.$store.dispatch("getProducts", {
      collection : 'starwars'
    });
  },
  computed: {
    productsList() {
      return this.$store.getters.productsList;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  }
};
</script>