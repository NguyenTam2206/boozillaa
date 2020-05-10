<template>
  <v-container style="margin-top : 55px;">
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

// Logic Filter : Khi người dùng click vào các option filter => v-model input vào store 1 state.filter : [v-model input]
// Bắt sự kiện mỗi lần + or - opitons filter sẽ action thay đổi state.filter và then getter lại sản phẩm đã filter
// Hiển thị array products đó lên.
// Lưu ý phạm vị sản phẩm (all or quan-ao,...)
</script>

