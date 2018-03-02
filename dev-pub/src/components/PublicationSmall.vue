<template lang="html">
  <div class="post">
    <v-flex xs12>
      <v-card color="white darken-2" class="dark--text">
        <v-card-title primary-title>
          <div class="headline">{{ front.title }}</div>
          <div>{{ front.tldr }}</div>
        </v-card-title>
        <v-card-actions >
          <v-btn flat dark disabled>{{ front.date }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
  import InfoCard from 'vue-info-card'
  export default {
    components: {
      InfoCard
    },
    props: ['title', 'pub_date', 'id', 'tldr'],
    data () {
      return {
        front: {
          date: this.pub_date,
          title: this.title,
          tldr: this.tldr
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

    .v-card
      text-decoration: none

</style>
