<template lang="pug">
.home-page
  Banner
  MyProject
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Banner from "@/components/banner/Banner.vue";
import MyProject from "@/components/projects/MyProject.vue"

@Component({
  components: {
    Banner,
    MyProject
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
