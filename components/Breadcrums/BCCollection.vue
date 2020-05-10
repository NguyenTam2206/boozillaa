<template>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          to: "/"
        },
        {
          text: "Collections",
          disabled: true,
          to: "/collection"
        },
      ]
    };
  },
};
</script>