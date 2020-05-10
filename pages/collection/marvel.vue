<template>
  <div>
    <v-col cols="12" md="8" offset-md="2">
      <v-row class="text-center">
        <p>Trải qua 80 năm trường tồn, di sản của Marvel Comics sẽ tiếp tục phát triển lớn mạnh. Mùa Thu/ Đông 2019 này, hãy chào đón các siêu anh hùng của chúng ta trở lại với dự án BOOzilla: BOO x Marvel.</p>
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
      collection : 'marvel'
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