<template>
  <div>
    <Banner />
    <v-container class="mt-5">
      <v-row class="d-flex">
        <v-col cols="12" md="6">
          <p class="display-2 text-center">Boozilla Store</p>
          <p>Tại BOOzilla, thời trang và văn hóa đại chúng sẽ hòa quyện làm một. Bạn sẽ tìm thấy ở “BOOzilla” những món phục trang được truyền cảm hứng bởi các tượng đài văn hóa lớn trên toàn thế giới - thứ tinh thần đẹp đẽ mà BOO muốn truyền tải thông qua dự án “BOOzilla”</p>
        </v-col>
        <v-col cols="12" md="6">
          <BrandSlide />
        </v-col>
      </v-row>
      <ImgSlide />
      <v-row style="margin: 40px 0;">
        <v-col class="text-center">
        <span>BOO X ONE PIECE STAMPEDE</span>
        <h2>LỄ HỘI HẢI TẶC</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <img src="@/assets/imgs/bannerlefthome.webp" alt="bannerlefthome">
        </v-col>
        <v-col cols=12 md="6">

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/HomePage/Banner";
import ImgSlide from "@/components/HomePage/ImgSlide";
import BrandSlide from "@/components/HomePage/BrandSlide";

export default {
  components: {
    Banner,
    ImgSlide,
    BrandSlide
  }
};
</script>