
<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(item,i) in items" :key="i">
      <div :class="[item.class + ' img']" @click="$router.push(item.link)"></div>
      <p class="text-center pt-2" style="font-size : 24px">{{item.title}}</p>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-loop-group",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      items: [
        { title: "Hulk", class: "img-hulk", link: "/collection/hulk" },
        { title: "Iron Man", class: "img-ironman", link: "/collection/ironman" },
        { title: "Captain American", class: "img-captain", link: "/collection/captiain-american" },
        { title: "Thor", class: "img-thor", link: "/collection/thor" },
        { title: "Spider Man", class: "img-spiderman", link: "/collection/spiderman" },
        { title: "Venom", class: "img-venom", link: "/collection/venom" }
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          autoplayDisableOnInteraction: true
        },
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.img {
  background-size: cover;
  background-position: center;
  height: 360px;
  border: solid 5px rgb(197, 197, 197);
}
.swiper-slide {
  height: 420px;
  cursor: pointer;
}

.img-hulk {
  background-image: url("../../assets/imgs/hulk.webp");
}
.img-ironman {
  background-image: url("../../assets/imgs/ironman.webp");
}
.img-captain {
  background-image: url("../../assets/imgs/captain.webp");
}
.img-thor {
  background-image: url("../../assets/imgs/thor.webp");
}
.img-spiderman {
  background-image: url("../../assets/imgs/spiderman.webp");
}
.img-venom {
  background-image: url("../../assets/imgs/venom.webp");
}
</style>>
