<template lang="html">
  <div class="post">

    <i v-on:click="$router.go(-1)" class="material-icons go-back-arrow">arrow_back</i>

    <div class="publication-title"><b>{{ dataTitle }}</b></div>
    <span class="date-span">{{dataPubDate}}</span>
    <div id="data-body">
    </div>
    <hr/>
    <ul class="comments-section">
      <div v-for="comment in comments">
        <div class="single-comment">
          <span class="comment-date"><small>{{comment.comment_date}}</small></span>
          <br>
          <span >{{comment.body}}</span>
        </div>

      </div>
    </ul>
    <div class="add-comment">
      <!--<textarea name="comment" id="comment" cols="30" rows="10" placeholder="Insert your commment here" v-model="comment.body"></textarea>-->
      <v-layout row>

          <v-text-field
            name="input-7-4"
            full-width
            multi-line
            single-line
            v-model="comment.body"
            placeholder="Insert your commment here"
          ></v-text-field>

      </v-layout>
      <v-btn flat color="primary" v-on:click="pushComment" class="submit-button">Submit comment</v-btn>
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import $ from 'jquery'

  export default {
    props: ['id'],
    data () {
      return {
        dataTitle: '',
        dataBody: '',
        dataPubDate: '',
        dataId: this.$route.params.id,
        comments: [],
        comment: {
          body: '',
          comment_date: ''
        }
      }
    },
    beforeRouteUpdate (to, from, next) {
      this.dataId = to.params.id
      next()
    },
    beforeCreate: function () {
      console.log('beforeCreate')
    },
    created: function () {
      console.log('created')
    },
    beforeMount: function () {
      console.log('beforeMount')
    },
    beforeUpdate: function () {
      console.log('beforeUpdate')
    },

    beforeDestroy: function () {
      console.log('beforeDestroy')
    },
    destroyed: function () {
      console.log('destroyed')
    },
    mounted: function () {
      console.log(this.dataId)
      axios.get('http://127.0.0.1:5000/post/' + this.dataId)
        .then(response => {
          console.log(response)
          var data = response.data
          this.dataTitle = data.title
          this.dataPubDate = data.pub_date
          this.dataBody = data.body
          var html = $.parseHTML(data.body)
          var $data = $('#data-body')
          // var nodeNames = []

          $data.append(html)
          // $.each(html, function (i, el) {
          //   nodeNames[i] = '<li>' + el.nodeName + '</li>'
          // })
          this.getComments()
        })
        .catch(error => {
          console.log(error)
        })
    },
    /*
    updated: function () {
      console.log('updated')
      axios.get('http://127.0.0.1:5000/post/' + this.id)
        .then(response => {
          console.log(response)
          var data = response.data
          this.dataTitle = data.title
          this.dataPubDate = data.pub_date
          this.dataBody = data.body
          this.getComments()
        })
        .catch(error => {
          console.log(error)
        })
    }, */
    methods: {
      getComments: function (event) {
        axios.get('http://127.0.0.1:5000/comment/' + this.dataId)
          .then(response => {
            var data = response.data
            this.comments = []
            for (var comment in data) {
              if (data.hasOwnProperty(comment)) {
                this.comments.push(data[comment])
              }
            }
            this.showComments = true
          })
      },
      pushComment: function (event) {
        if (this.comment !== '') {
          axios.post('http://127.0.0.1:5000/comment', {
            body: this.comment.body,
            post_id: this.dataId
          })
            .then(response => {
              this.comment.body = ''
              this.getComments()
            })
            .catch(e => {
              console.log(e)
            })
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables.scss'

  .post
    margin: 5vh auto
    width: 65%
    // background-color: $main-orange
    // border-radius: 5px
    // border: 2px solid $main-green
    padding: 5px

    .title-user
      width: 100%
      margin: 5% auto
      padding-bottom: 5px

    .title
      float: left
      color: $strange-color
      font-weight: 900

    .user
      margin-left: 15px
      margin: 0 0 0 2vh
      font-weight: 700
      color: $main-purple
      float: right

    .date
      float: right
      font-weight: 300
      font-size: 10px
      margin: 2vh auto

    .abstract
      font-size: 16px
      font-weight: 400
      margin: 0 auto
      color: black

      .category
        margin-left: 1rem

    .publication-title
      font-weight: 700
      font-size: xx-large

    .date-span
      font-size: x-small
      float: right

    #data-body
      margin-top: 5vh
      font-size: large

    hr
      display: block
      height: 1px
      border: 0
      border-top: 1px solid #ccc
      margin: 1em 0
      padding: 0

    .comments-section
      background: $greenish-grey
      padding: 1vh

    .single-comment
      background: white
      padding: 0.5vh
      margin-top: 1vh
      font-size: large

    .comment-date
      font-size: x-small

    .add-comment
      display: flex
      flex-direction: column
      flex-wrap: nowrap
      justify-content: space-around
      align-items: stretch
      align-content: stretch
      font-size: small

    .submit-button
      width: fit-content
      font-size: small
      color: $main-green
      float: right
      margin: 2vh 0 1vh auto

    .go-back-arrow:hover
      cursor: pointer

</style>
