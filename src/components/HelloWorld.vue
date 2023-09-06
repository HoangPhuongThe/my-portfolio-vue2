<template lang="pug">
h1(:msg="msg")
</template>

<style lang='stylus' scoped>

</style>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
})
export default class HelloWorld extends Vue {
  msg: any;
  mounted() {
   console.log(this.msg) 
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
