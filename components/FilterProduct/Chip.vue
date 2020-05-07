<template>
    <v-chip v-if="chip" class="ma-2" close @click:close="close" color="green" text-color="white">
        <slot></slot>
    </v-chip>
</template>

<script>
export default {
  props: {
      name : {
          type : String,
          require : true
      }
  },
  data() {
    return {
      chip: true
    };
  },
  methods : {
      close() {
          this.chip = false
          this.$emit('closechip')
      }
  }
};
</script>