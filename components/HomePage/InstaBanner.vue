<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="3" class="gallery pa-0">
        <a href="/">
          <img src="@/assets/imgs/instaimg1.jpg" alt="insta1" />
        </a>
      </v-col>
      <v-col cols="6" sm="3" class="gallery pa-0">
        <a href="/">
          <img src="@/assets/imgs/instaimg2.jpg" alt="insta1" />
        </a>
      </v-col>
      <v-col cols="6" sm="3" class="gallery pa-0">
        <a href="/">
          <img src="@/assets/imgs/instaimg3.jpg" alt="insta1" />
        </a>
      </v-col>
      <v-col cols="6" sm="3" class="gallery pa-0">
        <a href="/">
          <img src="@/assets/imgs/instaimg4.jpg" alt="insta1" />
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.gallery {
  position: relative;
  overflow: hidden;
}
.gallery img {
    width : 100%;
    filter :grayscale(1)
}
.gallery img:hover {
    filter :grayscale(0);
    transform: scale(1.2);
    transition: all ease .3s
}
</style>