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
          <div style="width: 100%; height: 85px; background-color : orange" class="mt-md-10">img</div>
        </v-col>
      </v-row>
      <ImgSlide />
    </v-container>
  </div>
</template>

<script>
import Banner from "@/components/HomePage/Banner";
import ImgSlide from "@/components/HomePage/ImgSlide";
export default {
  components: {
    Banner,
    ImgSlide
  }
};
</script>