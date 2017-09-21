<template>
  <div id="app">
    <header>
      <span>DevPub</span>
      <div class="routes">
        <a>/itHappened</a>
        <a>/weSolved</a>
        <a>/weBuilt</a>
        <a>/faq</a>
        <a>/subscribe</a>
      </div>
    </header>
    <main>
      <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
      <!-- <router-view></router-view> -->
      <Publication></Publication>
      <Publication></Publication>
      <Publication></Publication>
    </main>
  </div>
</template>

<script>
import Publication from './components/Publication'
export default {
  name: 'app',
  components: {
    Publication
  }
}
</script>

<style lang="sass" >
@import './styles/variables.scss'

body
  margin: 0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50


main
  margin-top: 40px
  display: block


header
  margin: 0
  height: 56px
  padding: 0 16px 0 24px
  background-color: $main-green
  color: $strange-color


header span
  display: block
  position: relative
  font-size: 20px
  line-height: 1
  letter-spacing: .02em
  font-weight: 900
  box-sizing: border-box
  padding-top: 16px


header .routes
  color: $strange-color
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  align-items: center
  align-content: flex-start
  float: right
  font-size: 16px
  line-height: 1
  letter-spacing: .02em
  font-weight: 700
  box-sizing: border-box

  a
    padding-right: 10px

</style>
