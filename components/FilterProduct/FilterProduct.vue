<template>
  <v-container>
    <!--Desktop-->
    <v-row class="hidden-sm-and-down">
      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn width="175" class="ma-2" v-on="on" tile color="grey lighten-2">
            <span>Loại sản phẩm</span>
            <v-spacer />
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(type,i) in types" :key="i">
            <v-checkbox v-model="type.checked" :label="`${type.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn width="175" class="ma-2" v-on="on" tile color="grey lighten-2">
            <span style="padding-left : 30px;">Nhân vật</span>
            <v-spacer />
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(char,i) in characters" :key="i">
            <v-checkbox v-model="char.checked" :label="`${char.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn width="175" class="ma-2" v-on="on" tile color="grey lighten-2">
            <span>Giá sản phẩm</span>
            <v-spacer />
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(price,i) in prices" :key="i">
            <v-checkbox v-model="price.checked" :label="`${price.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn width="175" class="ma-2" v-on="on" tile color="grey lighten-2">
            <span style="padding-left : 30px;">Màu sắc</span>
            <v-spacer />
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(color,i) in colors" :key="i">
            <v-checkbox v-model="color.checked" :label="`${color.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn width="175" class="ma-2" v-on="on" tile color="grey lighten-2">
            <span>Sắp xếp theo</span>
            <v-spacer />
            <v-icon right>mdi-sort-variant</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(color,i) in colors" :key="i">
            <v-checkbox v-model="color.checked" :label="`${color.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>

    <!--Mobile-->
    <v-row class="hidden-md-and-up">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="grey lighten-2" v-on="on">
            <span>Filter</span>
            <v-icon right>mdi-filter-variant</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-app-bar color="grey lighten-2" fixed>
            <v-btn icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Filter</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>
          <v-list style="margin-top: 55px;">
            <v-list-item class="my-5">
              <v-list-item-title style="font-size : 20px;">Loại Sản Phẩm</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="type in types" :key="type.title">
              <v-checkbox v-model="type.checked" :label="`${type.title}`"></v-checkbox>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="my-5">
              <v-list-item-title style="font-size : 20px;">Nhân Vật</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="char in characters" :key="char.title">
              <v-checkbox v-model="char.checked" :label="`${char.title}`"></v-checkbox>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="my-5">
              <v-list-item-title style="font-size : 20px;">Giá Sản Phẩm</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="price in prices" :key="price.title">
              <v-checkbox v-model="price.checked" :label="`${price.title}`"></v-checkbox>
            </v-list-item>
            <v-list-item class="my-5">
              <v-list-item-title style="font-size : 20px;">Màu Sắc</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="color in colors" :key="color.title">
              <v-checkbox v-model="color.checked" :label="`${color.title}`"></v-checkbox>
            </v-list-item>
          </v-list>
          <v-btn
            height="60"
            tile
            color="black"
            dark
            @click="dialog = false"
            fixed
            block
            style="bottom : 0px; border-radius: none;"
          >Lọc Sản Phẩm</v-btn>
        </v-card>
      </v-dialog>
      <v-spacer></v-spacer>
      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" tile color="grey lighten-2">
            <span>Sắp xếp theo</span>
            <v-spacer />
            <v-icon right>mdi-sort-variant</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(color,i) in colors" :key="i">
            <v-checkbox v-model="color.checked" :label="`${color.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <ChipList
      @closeTypeChip="closeTypeChip"
      @closeCharacterChip="closeCharacterChip"
      @closePriceChip="closePriceChip"
      @closeColorChip="closeColorChip"
    />
  </v-container>
</template>

<script>
import ChipList from "./ChipList";

export default {
  components: {
    ChipList
  },
  props: {
    rangeFilter: {
      type: String,
      default: "all"
    }
  },
  data() {
    return {
      dialog: false,
      filter: {},
      prices: [
        { title: "1000", checked: false },
        { title: "20000", checked: false },
        { title: "3000000", checked: false },
        { title: "40000000", checked: false },
        { title: "50000000", checked: false }
      ],
      types: [
        { title: "Mũ", checked: false },
        { title: "Túi", checked: false },
        { title: "Áo", checked: false },
        { title: "Quần", checked: false },
        { title: "Khác", checked: false }
      ],
      characters: [
        { title: "Mickey", checked: false },
        { title: "Thor", checked: false },
        { title: "Captain", checked: false },
        { title: "Venom", checked: false },
        { title: "Spider man", checked: false },
        { title: "Mickey1", checked: false },
        { title: "Thor1", checked: false },
        { title: "Captain1", checked: false },
        { title: "Venom1", checked: false },
        { title: "Spider man1", checked: false },
        { title: "Mickey2", checked: false },
        { title: "Thor2", checked: false },
        { title: "Captain2", checked: false },
        { title: "Venom2", checked: false },
        { title: "Spider man2", checked: false },
        { title: "Mickey3", checked: false },
        { title: "Thor3", checked: false },
        { title: "Captain3", checked: false },
        { title: "Venom3", checked: false },
        { title: "Spider man3", checked: false }
      ],
      colors: [
        { title: "Pink", checked: false },
        { title: "Red", checked: false },
        { title: "Blue", checked: false },
        { title: "Black", checked: false },
        { title: "Yellow", checked: false }
      ]
    };
  },
  watch: {
    prices: {
      handler: function() {
        let checkedArr = this.prices.filter(e => e.checked === true);
        let priceOption = checkedArr.map(e => e.title);
        this.filter = {
          ...this.filter,
          rangeFilter: this.rangeFilter,
          priceFilter: [...priceOption]
        };
        console.log(this.filter);
        this.$store.dispatch("getProducts", this.filter);
      },
      deep: true
    },
    types: {
      handler: function() {
        let checkedArr = this.types.filter(e => e.checked === true);
        let typeOption = checkedArr.map(e => e.title);
        this.filter = {
          ...this.filter,
          rangeFilter: this.rangeFilter,
          typeFilter: [...typeOption]
        };
        console.log(this.filter);
        this.$store.dispatch("getProducts", this.filter);
      },
      deep: true
    },
    colors: {
      handler: function() {
        let checkedArr = this.colors.filter(e => e.checked === true);
        let colorOption = checkedArr.map(e => e.title);
        this.filter = {
          ...this.filter,
          rangeFilter: this.rangeFilter,
          colorFilter: [...colorOption]
        };
        console.log(this.filter);
        this.$store.dispatch("getProducts", this.filter);
      },
      deep: true
    },
    characters: {
      handler: function() {
        let checkedArr = this.characters.filter(e => e.checked === true);
        let characterOption = checkedArr.map(e => e.title);
        this.filter = {
          ...this.filter,
          rangeFilter: this.rangeFilter,
          characterFilter: [...characterOption]
        };
        console.log(this.filter);
        this.$store.dispatch("getProducts", this.filter);
      },
      deep: true
    }
  },
  methods: {
    closeTypeChip(c) {
      const type = this.types.find(e => e.title === c);
      type.checked = false;
    },
    closeCharacterChip(c) {
      const character = this.characters.find(e => e.title === c);
      character.checked = false;
    },
    closePriceChip(c) {
      const price = this.prices.find(e => e.title === c);
      price.checked = false;
    },
    closeColorChip(c) {
      const color = this.colors.find(e => e.title === c);
      color.checked = false;
    }
  }
};
</script>
<style>
.v-input--selection-controls {
  margin-top: 0px;
  padding-top: 0px;
}
.v-list-item {
  height: 40px;
  min-height: 25px;
}
</style>