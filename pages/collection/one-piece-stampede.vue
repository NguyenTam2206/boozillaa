<template>
  <div>
    <v-col cols="12" md="8" offset-md="2">
      <v-row class="text-center">
        <p>Don't ever think there's any perfect society made by humans!! If you think that way you'll overlook the enemy!! Don't be fooled by appearances!!” - Smoker.</p>
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
      collection : 'one-piece-stampede'
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