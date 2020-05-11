<template>
  <v-container>
    <!--BreadCrumb-->
    <BCCatelogy />
    <h1 class="text-center my-5">{{title}}</h1>
    <FilterProduct :rangeFilter="$route.params.name" />
    <LoadProduct :quantity="8" v-if="isLoading" />
    <ProductsList :productsList="productsList" />
    <v-row justify="center" style="margin-bottom: 40px;">
      <v-btn outlined width="300">Xem Thêm</v-btn>
    </v-row>
    <PageIconInfo />
  </v-container>
</template>

<script>
import BCCatelogy from "@/components/Breadcrums/BCCatelogy";
import FilterProduct from "@/components/FilterProduct/FilterProduct";
import ProductsList from "@/components/Products/ProductsList";
import LoadProduct from "@/components/Products/LoadProduct";
import PageIconInfo from "@/components/PageIconInfo/PageIconInfo";

export default {
  data() {
    return {};
  },
  computed: {
    title() {
      // this.items[this.items.length - 1].text = "aaaa";
      switch (this.$route.params.name) {
        case "quan-ao":
          return "Quần áo";
          break;
        case "phu-kien":
          return "Phụ kiện thời trang";
          break;
        case "do-choi":
          return "Đồ chơi sưu tầm";
          break;
        case "van-phong-pham":
          return "Văn phòng phẩm";
          break;
        case "all":
          return "Tất cả sản phẩm";
          break;
        default:
        // code block
      }
    },
    productsList() {
      return this.$store.getters.productsList;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  components: {
    BCCatelogy,
    FilterProduct,
    ProductsList,
    LoadProduct,
    PageIconInfo
  },
  created() {
    this.$store.dispatch("getProducts", {
      rangeFilter: this.$route.params.name
    });
  }
};
</script>

