<template lang="pug">
.home-page
  Banner
  AboutMe
  MyProject
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Banner: () => import("@/components/banner/Banner.vue"),
    MyProject: () => import("@/components/projects/MyProject.vue"),
    AboutMe: () => import("@/components/aboutMe/AboutMe.vue"),
    
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
