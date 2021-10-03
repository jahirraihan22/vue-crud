<template>
  <div id="app">
    <div class="col-md-10 mx-auto">
      <router-link class="btn btn-primary m-2" to="/category">
                    category
              </router-link>
              <router-link class="btn btn-primary m-2" to="/news">
                    news
              </router-link>
              <router-view />
    </div>
    <Category/>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
