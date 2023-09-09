<template lang="pug">
.home
  Banner
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/banner/Banner.vue";

@Component({
  components: {
    Banner
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
})
export default class HomeView extends Vue {}
</script>
