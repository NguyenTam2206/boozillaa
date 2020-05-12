<template>
  <v-container>
    <BCProductDetail :name="$route.params.name" />
    <v-lazy>
    <v-img :src="product.imgs[0]"></v-img>
    </v-lazy>
  </v-container>
</template>

<script>
import BCProductDetail from "@/components/Breadcrums/BCProductDetail";
import axios from "axios";

export default {
  components: {
    BCProductDetail
  },
  //   async asyncData() {
  //       const res = await axios.get(process.env.apiUrl + this.route.params.name)
  //       const data = res.data
  //       return {
  //           product : data
  //       }
  //   }
  data() {
    return {
      product: {
        imgs: [
          require("@/assets/imgs/product.png"),
          require("@/assets/imgs/producthoverimg.png")
        ],
        title : "ÁO PHÔNG NỮ ONE PIECE STAMPEDE",
        sku : '1.0.02.1.02.014.120.01',
        price : '399,000₫',
        colors : ['white', 'red', 'blue'],
        sizes : ['XS', 'S', "M", "L" ],
        store : ['ABC', 'DEF'],
        info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis modi inventore eius hic libero accusamus dolore. Odio odit quia suscipit ducimus fugit amet molestiae, adipisci, doloribus itaque facere a?"
      }
    };
  }
};
</script>