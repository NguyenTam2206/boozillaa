<template>
  <div>
    <client-only>
      <v-app-bar color="white" dense light height="55" :elevate-on-scroll="true" elevation="4">
        <!--HamburgerBtn-->
        <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="hamburger = !hamburger"></v-app-bar-nav-icon>

        <!--Logo-->
        <nuxt-link to="/">
          <img src="~assets/imgs/logo.svg" alt="logo" class="img-responsive mx-3" width="130" />
        </nuxt-link>
       
       <!--Tags on Desktop-->
        <v-btn 
          class="mx-3 px-1 text-capitalize hidden-sm-and-down"
          light
          outlined
          height="27"
          v-for="(tag, index) in tags"
          :key="index"
          @mouseover="hover(index)"
        >{{tag.title}}</v-btn>
        
        <v-spacer></v-spacer>

        <!--Search on Desktop-->
        <v-btn icon class="hidden-sm-and-down">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <!--Account-->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="n in 2" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!--CartBtn-->
        <v-btn icon>
          <v-icon @click.stop="drawer = !drawer">mdi-cart-outline</v-icon>
        </v-btn>
      </v-app-bar>
    </client-only>

    <!--Content on Hover Tags-->
    <div v-if="active">
      <div v-if="this.tags[0].isShow" @mouseleave="active = false">
        <License />
      </div>
      <div v-if="this.tags[1].isShow" @mouseleave="active = false">
        <Clothes />
      </div>
    </div>

    <!--Drawer Cart-->
    <v-navigation-drawer v-model="drawer" absolute temporary right width="280">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon @click="drawer = false">mdi-close</v-icon>
            <span class="ml-3" style="font-size : 20px;">Giỏ hàng</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--Drawer Hamburger Mobile-->

    <v-navigation-drawer v-model="hamburger" absolute temporary width="280">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon @click="hamburger = false">mdi-close</v-icon>
            <span class="ml-3" style="font-size : 20px;">Menu</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import License from "../TagsHoverContent/License.vue";
import Clothes from "../TagsHoverContent/Clothes";

export default {
  components: {
    License,
    Clothes
  },
  data() {
    return {
      hamburger : null,
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-dashboard" },
        { title: "About", icon: "mdi-question" }
      ],
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

</style>