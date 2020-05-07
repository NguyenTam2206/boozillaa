<template>
  <v-container style="height: 100%">
    <v-row style="height: 100%" class="hidden-sm-and-down">
      <v-col cols="3" style="align-self : center">
        <v-img :src="img"></v-img>
      </v-col>
      <v-col cols="3" style="align-self : center">
        <h3>Áo</h3>
        <v-divider style="margin-bottom: 20px;"></v-divider>
        <nuxt-link to="/" class="link">
          <p>Áo nỉ</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Áo thun</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Áo sơmi</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Áo khoác</p>
        </nuxt-link>
      </v-col>
      <v-col cols="3" style="align-self : center">
        <h3>Quần</h3>
        <v-divider style="margin-bottom: 20px;"></v-divider>
        <nuxt-link to="/" class="link">
          <p>Quần nỉ</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Quần thun</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Quần sơmi</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Quần khoác</p>
        </nuxt-link>
      </v-col>
      <v-col cols="3" style="align-self : center">
        <h3>Váy</h3>
        <v-divider style="margin-bottom: 20px;"></v-divider>
        <nuxt-link to="/" class="link">
          <p>Váy nỉ</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Váy thun</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Váy sơmi</p>
        </nuxt-link>
        <nuxt-link to="/" class="link">
          <p>Váy khoác</p>
        </nuxt-link>
      </v-col>
    </v-row>
    <v-row class="hidden-md-and-up">
      <v-expansion-panels flat>
        <v-expansion-panel v-for="(item,i) in items" :key="i">
          <v-expansion-panel-header>{{ item.header }}</v-expansion-panel-header>
          <v-expansion-panel-content v-for="(tag,i) in item.tags" :key="i">
            <nuxt-link to="/" style="text-decoration : none; color: black">{{ tag }}</nuxt-link>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { header: "Áo", tags: ["Áo nỉ", "Áo thun", "Áo sơmi", "Áo khoác"] },
        { header: "Quần", tags: ["Quần nỉ", "Quần thun", "Quần sơmi", "Quần khoác"] },
        { header: "Váy", tags: ["Váy nỉ", "Váy thun", "Váy sơmi", "Váy khoác"] }
      ],
      img: require("../../assets/imgs/quanaohoverimg.png")
    };
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: grey;
  transition: all ease 0.5s;
}
.link:hover {
  color: black;
  transition: all ease 0.5s;
}
</style>

