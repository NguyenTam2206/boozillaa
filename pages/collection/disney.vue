<template>
  <div>
    <v-col cols="12" md="8" offset-md="2">
      <v-row class="text-center">
        <p>BOO là đối tác chính thức của Disney tại Việt Nam, được cấp phép tác quyền để sản xuất các mặt hàng thời trang mang cảm hứng sáng tạo từ nhiều thương hiệu văn hóa đại chúng toàn cầu sở hữu bởi Disney như Mickey, Marvel hay Star Wars v.v...</p>
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
      collection : 'disney'
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