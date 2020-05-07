<template>
  <v-chip v-if="chip" class="ma-2" close @click:close="close" :color="color" outlined>
    <slot></slot>
  </v-chip>
</template>

<script>
export default {
  props: {
    color: {
      type : String,
      required : true
    },
  },
  data() {
    return {
      chip: true
    };
  },
  methods: {
    close() {
      this.chip = false;
      this.$emit("closechip");
    }
  }
};
</script>