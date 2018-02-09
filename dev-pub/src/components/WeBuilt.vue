<template>
  <div id='webuilt'>
    <h2>We Built</h2>
    <p>Yay we built it!</p>
    <ul id="publication-list">
      <div v-for="article in articles">
        <router-link :to="{ name: 'Publication', params: { id: article.id }}">
          <publication-small :title="article.title" :pub_date="article.pub_date" :body="article.body" :id="article.id"></publication-small>
        </router-link>
      </div>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import PublicationSmall from './PublicationSmall'

  export default {
    components: {PublicationSmall},
    data () {
      return {
        articles: []
      }
    },
    created: function () {
      axios.get('http://127.0.0.1:5000/weBuilt/posts')
        .then(response => {
          var data = response.data
          for (var article in data) {
            if (data.hasOwnProperty(article)) {
              this.articles.push(data[article])
            }
          }
          this.articles.reverse()
        })
        .catch(error => {
          console.log(error)
        })
    }
}
</script>
<style lang="sass">
@import '../styles/variables.scss'

body
  margin: 0

#webuilt
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $strange-color
  margin: 5%
</style>
