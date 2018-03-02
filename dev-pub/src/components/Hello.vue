<template lang="html">
  <div>

      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">Welcome to devPub_</h3>
            <span class="subheading">devPub_ its a community of developers where each one can contribute with stories of the workspace, challenges that were solved or show-off stuff that you built.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">Leave your feedback or suggest new features on our <a href="https://github.com/amaralDaniel/DevPub-frontend">GitHub page</a>.</div>
            <div class="body-1 mb-3">Support devPub_ in the upper-right corner or by clicking <a href="https://www.buymeacoffee.com/XC37Kmu9o">here</a>.</div><div></div>
          </v-flex>
        </v-layout>
      </v-container>

  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
