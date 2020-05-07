<template>
  <div style="margin-left : -15px; margin-top: 20px;">
    <Chip
      v-for="chip in chipType"
      :key="chip.title"
      color="green"
      @closechip="$emit('closeTypeChip', chip)"
    >{{chip}}</Chip>
    <Chip
      v-for="chip in chipCharacter"
      :key="chip.title"
      color="orange"
      @closechip="$emit('closeCharacterChip', chip)"
    >{{chip}}</Chip>
    <Chip
      v-for="chip in chipPrice"
      :key="chip.title"
      color="blue"
      @closechip="$emit('closePriceChip', chip)"
    >{{chip}}</Chip>
    <Chip
      v-for="chip in chipColor"
      :key="chip.title"
      color="purple"
      @closechip="$emit('closeColorChip', chip)"
    >{{chip}}</Chip>
  </div>
</template>

<script>
import Chip from "./Chip";

export default {
  components: {
    Chip
  },
  computed: {
    chipPrice() {
      const filter = this.$store.getters.filter;
      if (filter.priceFilter && filter.priceFilter.length > 0) {
        return [...filter.priceFilter];
      }
    },
    chipType() {
      const filter = this.$store.getters.filter;
      if (filter.typeFilter && filter.typeFilter.length > 0) {
        return [...filter.typeFilter];
      }
    },
    chipCharacter() {
      const filter = this.$store.getters.filter;
      if (filter.characterFilter && filter.characterFilter.length > 0) {
        return [...filter.characterFilter];
      }
    },
    chipColor() {
      const filter = this.$store.getters.filter;
      if (filter.colorFilter && filter.colorFilter.length > 0) {
        return [...filter.colorFilter];
      }
    }
  }
};
</script>