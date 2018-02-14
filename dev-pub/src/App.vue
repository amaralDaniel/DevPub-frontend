<template>
  <div id="app">
    <header>
      <router-link class="dev-pub" to="/">devPub_</router-link>
      <div class="buy-a-coffee">
        <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/XC37Kmu9o"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Support devPub"><span style="margin-left:5px">Support devPub</span></a>
      </div>
    </header>
    <main>
      <div class="sub-header">
        <div class="routes">
          <router-link to="/ithappened">/itHappened</router-link>
          <router-link to="/wesolved">/weSolved</router-link>
          <router-link to="/webuilt">/weBuilt</router-link>
          <!--<router-link to="/faq">/faq</router-link>
          <router-link to="/subscribe">/subscribe</router-link>-->
        </div>
        <router-link to="/publish">
          <button class="share-button">Share with the community</button>
        </router-link>
      </div>


      <transition>
        <keep-alive>
          <router-view :key="$route.fullPath"></router-view>
        </keep-alive>
      </transition>
      <!-- <Publication data="hello!"></Publication>
      <Publication></Publication>
      <Publication></Publication> -->
    </main>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>devPub_ © {{ new Date().getFullYear() }}</div>
    </v-footer>
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
    color: $strange-color


  main
    margin-top: 40px
    display: block


  header
    margin: 0
    height: 56px
    padding: 0 16px 0 24px
    background-color: $main-green
    color: $strange-color
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    justify-content: space-between
    align-items: stretch
    align-content: stretch
    display: flex !important


  header .dev-pub
    position: relative
    font-size: 32px
    line-height: 1
    letter-spacing: .02em
    font-weight: 900
    box-sizing: border-box
    padding-top: 16px
    color: $strange-color
    text-decoration: none
    margin-top: 1vh


  .routes
    color: $strange-color
    display: flex
    margin: 1vh auto
    width: fit-content
    font-size: 16px
    line-height: 1
    letter-spacing: .02em
    font-weight: 700
    box-sizing: border-box

    a
      padding-right: 10px
      color: $strange-color
      text-decoration: none

  .share-button
    border-radius: 2px
    background-color: $main-green
    -webkit-transition-duration: 0.4s /* Safari */
    transition-duration: 0.4s
    display: flex
    margin: 1vh auto 0vh auto
    width: fit-content
    padding: 1vh
    font-size: medium
    font-weight: 500
    color: $strange-color

  .share-button:hover
    background-color: white
    border-color: $main-green
    cursor: pointer

  .bmc-button img{width: 27px !important;margin-bottom: 3px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 41px !important;height:41px !important;text-decoration: none !important;display:inline-block !important;color:#ffffff !important;background-color:#FF813F !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 0px 9.5px !important;font-size: 24px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;-o-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;margin: 0 auto !important;font-family:"Cookie",sans-serif !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0 4px 16px 0 rgba(190, 190, 190,.45) !important;text-decoration: none !important;box-shadow: 0 4px 16px 0 rgba(190, 190, 190,.45) !important;opacity: 0.85 !important;color:#ffffff !important;}

  .buy-a-coffee
    margin-top: 1vh

  .sub-header
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: space-around
    align-items: stretch
    align-content: stretch

  a, u
    text-decoration: none !important

  a, a:visited, a:hover, a:active
    color: inherit
</style>
