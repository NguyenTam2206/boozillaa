<template>
  <div>
    <client-only>
      <v-app-bar color="white" dense light height="55" :elevate-on-scroll="true" elevation="4" fixed>
        <!--HamburgerBtn-->
        <v-app-bar-nav-icon class="hidden-lg-and-up" @click.stop="hamburger = !hamburger"></v-app-bar-nav-icon>

        <!--Logo-->
        <nuxt-link to="/">
          <img src="~assets/imgs/logo.svg" alt="logo" class="img-responsive mx-3" width="130" />
        </nuxt-link>

        <!--Tags on Desktop-->
        <v-btn
          class="mx-3 px-1 text-capitalize hidden-md-and-down"
          light
          outlined
          height="27"
          v-for="(tag, index) in tags"
          :key="index"
          @mouseover="hover(index)"
          router
          :to="tag.link"
        >{{tag.title}}</v-btn>

        <v-spacer></v-spacer>

        <!--Search on Desktop-->
        <v-btn icon>
          <v-icon @click="onSearch = !onSearch">mdi-magnify</v-icon>
        </v-btn>

        <!--Account-->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" class="d-none d-sm-flex">
              <v-icon>mdi-account-outline</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title @click="$router.push('/account')" class="log">Sign In / Account</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="()=>{}" class="log">Log Out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!--CartBtn-->
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-cart-outline</v-icon>
          <v-badge color="red" content="3" class="ml-n2 mt-n3"></v-badge>
        </v-btn>
      </v-app-bar>
    </client-only>

    <!--Content on Hover Tags-->
    <div v-if="active">
      <div v-if="this.tags[0].isShow" @mouseleave="active = false" class="hoverTagBox">
        <License />
      </div>
      <div v-if="this.tags[1].isShow" @mouseleave="active = false" class="hoverTagBox">
        <Clothes />
      </div>
    </div>
    <div v-if="onSearch" @mouseleave="active = false" class="hoverTagBox">
      <Search />
    </div>

    <!--Drawer Cart-->
    <v-navigation-drawer v-model="drawer" fixed temporary right width="280">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-icon @click="drawer = false">mdi-close</v-icon>
            <span class="ml-3" style="font-size : 20px;">Giỏ hàng (3)</span>
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

      <v-expansion-panels flat hover>
        <v-expansion-panel v-for="(tag,index) in tags" :key="index">
          <v-expansion-panel-header :hide-actions="!tag.childContents">
            <nuxt-link :to="tag.link" style="text-decoration : none; color : black">{{tag.title}}</nuxt-link>
          </v-expansion-panel-header>
          <!--add router link-->
          <v-expansion-panel-content>
            <License v-if="index === 0" />
            <Clothes v-if="index === 1" />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header hide-actions>
            <span>
              <v-icon class="justify-start">mdi-account-outline</v-icon>
              <span class="pl-3">Tài khoản</span>
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <nuxt-link
              to="/account"
              style="text-decoration : none; color: black; padding-left: 35px;"
            >Account/ Sign In</nuxt-link>
            <br />
            <br />
            <nuxt-link
              to="/"
              style="text-decoration : none; color: black; padding-left: 35px;"
            >Log Out</nuxt-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-list class="pt-0">
        <v-list-item-group>
          <v-list-item class="none-nest-link">
            <v-icon>mdi-phone-outline</v-icon>
            <a
              href="tel:123456789"
              class="pl-3"
              style="text-decoration : none; color: black"
            >Hotline - 123456789</a>
          </v-list-item>
          <v-list-item class="none-nest-link">
            <v-icon>mdi-email-outline</v-icon>
            <a
              href="mailto:online@boo.vn"
              target="_blank"
              class="pl-3"
              style="text-decoration : none; color: black"
            >Mail - online@boo.vn</a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import License from "../TagsHoverContent/License.vue";
import Clothes from "../TagsHoverContent/Clothes";
import Search from "./Search";

export default {
  components: {
    License,
    Clothes,
    Search
  },
  data() {
    return {
      onSearch: false,
      hamburger: null,
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-dashboard" },
        { title: "About", icon: "mdi-question" }
      ],
      active: false,
      tags: [
        {
          title: "Bản quyền",
          isShow: false,
          link: "/collections/ban-quyen",
          childContents: true
        },
        {
          title: "Quần áo",
          isShow: false,
          link: "/collections/quan-ao",
          childContents: true
        },
        {
          title: "Phụ kiện thời trang",
          isShow: false,
          link: "/collections/phu-kien",
          childContents: false
        },
        {
          title: "Đồ chơi sưu tầm",
          isShow: false,
          link: "/collections/do-choi",
          childContents: false
        },
        {
          title: "Văn phòng phẩm",
          isShow: false,
          link: "/collections/van-phong-pham",
          childContents: false
        },
        { title: "Sự kiện", isShow: false, link: "/blogs" }
      ]
    };
  },
  methods: {
    hover(index) {
      this.onSearch = false;
      this.active = true;
      this.tags.forEach(e => (e.isShow = false));
      this.tags[index].isShow = true;
    }
  }
};
</script>

<style scoped>
.hoverTagBox {
  background-color: orange;
  height: 300px;
  position: fixed;
  top: 55px;
  z-index: 1;
  width: 100%;
}

.none-nest-link {
  padding-left: 24px;
}

.log:hover {
  cursor: pointer;
}
</style>