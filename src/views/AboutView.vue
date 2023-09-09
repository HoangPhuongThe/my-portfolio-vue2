<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld msg="This is about" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
})
export default class AboutView extends Vue {}
</script>
