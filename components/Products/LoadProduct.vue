<template>
  <v-row>
    <v-col cols="6" md="3" v-for="(product,i) in quantity" :key="i">
      <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class="px-3 pt-3 pb-3">
        <v-skeleton-loader :tile="true" class="mx-auto" max-width="1000" type="card"></v-skeleton-loader>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      required: true
    }
  },
  inject: ["theme"]
};
</script>

<style>
@media (max-width: 599px) {
  .v-skeleton-loader__image {
    height: 245px !important;
  }
}
@media (min-width: 600px) and (max-width: 959px) {
  .v-skeleton-loader__image {
    height: 550px !important;
  }
}
@media (min-width: 960px) and (max-width: 1263px) {
  .v-skeleton-loader__image {
    height: 300px !important;
  }
}
@media (min-width: 1264px) {
  .v-skeleton-loader__image {
    height: 407px !important;
  }
}
</style>
