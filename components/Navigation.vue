<template>
  <div>
    <v-app-bar color="white" dense light height="55" :elevate-on-scroll="true" elevation="4">
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
      <nuxt-link to="/">
        <img src="~assets/imgs/logo.svg" alt="logo" class="img-responsive mx-3" width="160" />
      </nuxt-link>
      <v-btn
        class="mx-3 px-1 text-capitalize d-block"
        light
        outlined
        height="27"
        v-for="(tag, index) in tags"
        :key="index"
        @mouseover="hover(index)"
      >{{tag.title}}</v-btn>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-expand-transition>
      <div v-if="active" >
        <div v-if="this.tags[0].isShow" @mouseleave="active = false" >
          <License />
        </div>
        <div v-if="this.tags[1].isShow" @mouseleave="active = false">
          <Clothes />
        </div>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import Button from "./Button";
import License from "./TagsHoverContent/License.vue";
import Clothes from "./TagsHoverContent/Clothes";

export default {
  components: {
    Button,
    License,
    Clothes
  },
  data() {
    return {
      active: false,
      tags: [
        { title: "Bản quyền", isShow: false },
        { title: "Quần áo", isShow: false },
        { title: "Phụ kiện thời trang", isShow: false },
        { title: "Đồ chơi sưu tầm", isShow: false },
        { title: "Văn phòng phẩm", isShow: false },
        { title: "Sự kiện", isShow: false }
      ]
    };
  },
  methods: {
    hover(index) {
      this.active = true;
      this.tags.forEach(e => (e.isShow = false));
      this.tags[index].isShow = true;
    }
  }
};
</script>

<style scoped>
.content-hover {
  position: fixed;
  top: 55px;
  z-index: 1;
}
</style>