<template>
  <v-container>
    <v-row>
      <v-menu offset-y max-height="400">
        <template v-slot:activator="{ on }">
          <v-btn width="175" class="ma-2" v-on="on" tile color="grey lighten-2">
            Loại sản phẩm
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
            Nhân Vật
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
            Giá sản phẩm
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
            Màu sắc
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(color,i) in colors" :key="i">
            <v-checkbox v-model="color.checked" :label="`${color.title}`"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <!-- <Chip v-for="(keyword,i) in keywords" :key="i" @closechip="closechip(keyword[0])">{{keyword[0]}}</Chip> -->
  </v-container>
</template>

<script>
import Chip from "./Chip";

export default {
  components: {
    Chip
  },
  props : {
    rangeFilter : {
      type : String,
      default : 'all'
    }
  },
  data() {
    return {
      filter : {},
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
  watch : {
    prices : {
      handler : function() {
        let checkedArr = this.prices.filter(e => e.checked === true)
        let priceOption = checkedArr.map(e => e.title) 
        this.filter = {
          ...this.filter,
          rangeFilter : this.rangeFilter,
          priceFilter : [...priceOption]
        }
        console.log(this.filter)
        this.$store.dispatch('getProducts', this.filter)
      },
      deep : true
    },
    types : {
      handler : function() {
        let checkedArr = this.types.filter(e => e.checked === true)
        let typeOption = checkedArr.map(e => e.title) 
        this.filter = {
          ...this.filter,
          rangeFilter : this.rangeFilter,
          typeFilter : [...typeOption]
        }
        console.log(this.filter)
        this.$store.dispatch('getProducts', this.filter)
      },
      deep : true
    },
    colors : {
      handler : function() {
        let checkedArr = this.colors.filter(e => e.checked === true)
        let colorOption = checkedArr.map(e => e.title) 
        this.filter = {
          ...this.filter,
          rangeFilter : this.rangeFilter,
          colorFilter : [...colorOption]
        }
        console.log(this.filter)
        this.$store.dispatch('getProducts', this.filter)
      },
      deep : true
    },
    characters : {
      handler : function() {
        let checkedArr = this.characters.filter(e => e.checked === true)
        let characterOption = checkedArr.map(e => e.title) 
        this.filter = {
          ...this.filter,
          rangeFilter : this.rangeFilter,
          characterFilter : [...characterOption]
        }
        console.log(this.filter)
        this.$store.dispatch('getProducts', this.filter)
      },
      deep : true
    },

  },
  computed: {
    fitler() {
      let filter = {};
      let priceOption = this.prices.filter(e => e.checked === true);
      let priceKey = priceOption.map(e => e.title);
      if (priceKey.length > 0) {
        filter = { ...filter, price: [...priceKey] };
      }

      let typeOption = this.types.filter(e => e.checked === true);
      let typeKey = typeOption.map(e => e.title);
      if (typeKey.length > 0) {
        filter = { ...filter, type: [...typeKey] };
      }

      let colorOption = this.colors.filter(e => e.checked === true);
      let colorKey = colorOption.map(e => e.title);
      if (colorKey.length > 0) {
        filter = { ...filter, color: [...colorKey] };
      }

      let characterOption = this.characters.filter(e => e.checked === true);
      let characterKey = characterOption.map(e => e.title);
      if (characterKey.length > 0) {
        filter = { ...filter, character: [...characterKey] };
      }

      //to do with store
      this.$store.dispatch("getProducts", filter);
      return filter;
    },
  },
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