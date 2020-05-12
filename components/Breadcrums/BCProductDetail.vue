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
          text: "Tất cả sản phẩm",
          disabled: false,
          to: "/product/all"
        },
        {
          text: this.name,
          disabled: false,
          to: `/product/${this.name}`
        }
      ]
    };
  },

  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>