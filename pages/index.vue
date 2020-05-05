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
          <img
            src="@/assets/imgs/bannerlefthome.webp"
            alt="bannerlefthome"
            style="max-width: 100%; padding-top: 12px;"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6" v-for="(product, i) in 4" :key="i">
              <Product />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-bottom: 40px;">
        <v-btn outlined width="300">Xem Thêm</v-btn>
      </v-row>
    </v-container>
    <BannerBottom />
    <v-row style="margin: 40px 0;">
      <v-col class="text-center">
        <span>BOO x STARWARS</span>
        <h2>STAR WARS - THE RISE OF SKYWALKER</h2>
      </v-col>
    </v-row>
    <ProductsList quantity="8" />
    <v-row justify="center" style="margin-bottom: 40px;">
      <v-btn outlined width="300">Xem Thêm</v-btn>
    </v-row>
    <v-row style="margin: 40px 0;">
      <v-col class="text-center">
        <h2>ĐỒ CHƠI, MÔ HÌNH</h2>
      </v-col>
    </v-row>
    <ProductsList quantity="8" />
    <v-row justify="center" style="margin-bottom: 40px;">
      <v-btn outlined width="300">Xem Thêm</v-btn>
    </v-row>
    <v-row style="margin: 40px 0;">
      <v-col class="text-center">
        <span>Follow Our Instagram</span>
        <a href="https://www.instagram.com/boozilla.vn/" target="_blank" style="text-decoration : none; color : black"><h2>@BOOZILLA.VN</h2></a>
      </v-col>
    </v-row>
    <InstaBanner />
  </div>
</template>

<script>
import Banner from "@/components/HomePage/Banner";
import ImgSlide from "@/components/HomePage/ImgSlide";
import BrandSlide from "@/components/HomePage/BrandSlide";
import Product from "@/components/Products/Product";
import BannerBottom from "@/components/HomePage/BannerBottom";
import ProductsList from "@/components/Products/ProductsList";
import InstaBanner from "@/components/HomePage/InstaBanner";

export default {
  components: {
    Banner,
    ImgSlide,
    BrandSlide,
    Product,
    BannerBottom,
    ProductsList,
    InstaBanner
  }
};
</script>