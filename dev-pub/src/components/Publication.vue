<template lang="html">
  <div class="post">
    <div class="title-user">
      <a href="https://www.elastic.co/blog/psd2-architectures-with-the-elastic-stack" class=" title"> {{ title }}  </a>
      <a class="user"> by {{ user }} </a>
    </div>
    <div class="abstract"> {{ abstract }} </div>
    <div class="date"> {{ postDate }} </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postDate: '17 September \'17',
      title: 'PSD2: Modern Banking API Architectures with the Elastic Stack',
      user: 'poster',
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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

</style>
