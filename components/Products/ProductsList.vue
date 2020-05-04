<template>
  <v-container>
    <v-row>
      <v-col cols="6" md="3" v-for="(product,i) in products" :key="i">
        <Product />
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
    }
  },
  computed: {
    products() {
      return +this.quantity;
    }
  }
};
</script>