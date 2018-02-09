<template lang="html">
  <div class="post">
    <div><b>{{ title }}</b></div>
    <span><small>{{pub_date}}</small></span>

  </div>
</template>

<script>
  export default {
    props: ['title', 'pub_date', 'id'],
    data () {
      return {
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

</style>
