<template>
  <div id="app">
    <header>
      <router-link class="dev-pub" to="/">DevPub</router-link>
      <div class="routes">
        <router-link to="/ithappened">/itHappened</router-link>
        <router-link to="/wesolved">/weSolved</router-link>
        <router-link to="/webuilt">/weBuilt</router-link>
        <router-link to="/faq">/faq</router-link>
        <router-link to="/subscribe">/subscribe</router-link>
      </div>
    </header>
    <main>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <!-- <Publication data="hello!"></Publication>
      <Publication></Publication>
      <Publication></Publication> -->
    </main>
  </div>
</template>

<script>
import Publication from './components/Publication'
import ItHappened from './components/ItHappened'
export default {
  name: 'app',
  components: {
    Publication,
    ItHappened
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


header .dev-pub
  display: block
  position: relative
  font-size: 20px
  line-height: 1
  letter-spacing: .02em
  font-weight: 900
  box-sizing: border-box
  padding-top: 16px
  color: $strange-color
  text-decoration: none


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

  router-link
    padding-right: 10px
    color: $strange-color
    text-decoration: none

</style>
