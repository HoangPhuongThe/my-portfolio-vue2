<template lang="pug">
#app
  //- nav 
    //- router-link.mr-2(to="/") Home
    //- router-link(to="/about") About
  router-view
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator';
import HomeView from '@/views/HomeView.vue'

@Component({
  components: {
    HomeView
  }
})
export default class App extends Vue {

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
