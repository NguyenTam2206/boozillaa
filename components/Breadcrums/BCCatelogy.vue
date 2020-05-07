<template>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Catelogy",
          disabled: false,
          to: "/catelogy/all"
        },
        {
          text: "",
          disabled: true
        }
      ]
    };
  },
  created() {
    // this.items[this.items.length - 1].text = "aaaa";
    switch (this.$route.params.name) {
      case "quan-ao":
        this.items[this.items.length - 1].text = "Quần áo";
        break;
      case "phu-kien":
        this.items[this.items.length - 1].text = "Phụ kiện thời trang";
        break;
      case "do-choi":
        this.items[this.items.length - 1].text = "Đồ chơi sưu tầm";
        break;
      case "van-phong-pham":
        this.items[this.items.length - 1].text = "Văn phòng phẩm";
        break;
      case "all":
        this.items[this.items.length - 1].text = "Tất cả sản phẩm";
        break;
      default:
      // code block
    }
  }
};
</script>