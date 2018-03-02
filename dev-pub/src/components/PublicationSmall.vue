<template lang="html">
  <div class="post">
    <v-flex xs12>
      <v-card color="white darken-2" class="dark--text mb-3" height="170">
        <v-card-title primary-title>
          <div class="headline">{{ front.title }}</div>
          <div>{{ front.tldr }}</div>
          <div class="regular grey--text">{{ front.date | moment("from")}}</div>
        </v-card-title>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
  import InfoCard from 'vue-info-card'
  import Vue from 'vue'
  Vue.use(require('vue-moment'))
  export default {
    components: {
      InfoCard
    },
    props: ['title', 'pub_date', 'id'],
    data () {
      return {
        front: {
          date: this.pub_date,
          title: this.title,
          tldr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada orci at mauris tempor, ut venenatis nulla luctus. Duis vel gravida urna. Morbi sed ipsum risus. Pellentesque elementum fringilla elit, eget ultricies lorem fermentum vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sodales nunc in libero.'
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables.scss'

  .post

    // background-color: $main-orange
    // border-radius: 5px
    // border: 2px solid $main-green


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

    .v-card
      text-decoration: none

</style>
