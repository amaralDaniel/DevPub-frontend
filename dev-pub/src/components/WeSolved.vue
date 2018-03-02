<template>
  <div id='wesolved'>
    <p class="headline">Yay you solved it! Now share with us how you did it</p>
    <ul id="publication-list">
      <div v-for="article in articles" >
        <router-link :to="{ name: 'Publication', params: { id: article.id }}">
          <publication-small :title="article.title" :pub_date="article.pub_date" :body="article.body" :id="article.id" :tldr="article.tldr"></publication-small>
        </router-link>
      </div>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import PublicationSmall from './PublicationSmall'
  export default {
    name: 'wesolved',
    components: {PublicationSmall},
    data () {
      return {
        articles: []
      }
    },
    created: function () {
      this.fetchData()
    },
    activated: function () {
      console.log('activated')
      this.fetchData()
    },
    methods: {
      fetchData: function () {
        axios.get('https://devpub.herokuapp.com/weSolved/posts')
          .then(response => {
            var data = response.data
            console.log(response)
            this.articles = []
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
  }
</script>
<style lang="sass">
  @import '../styles/variables.scss'

  body
    margin: 0

  #wesolved
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: $strange-color
    margin: 5%
</style>
