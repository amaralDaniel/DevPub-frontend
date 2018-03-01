<template>
  <v-app id="app" light>
    <v-toolbar color="primary" class="" height="65">
      <v-toolbar-title color="primary" append replace to="/" class="display-1" >devPub_</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <div class="buy-a-coffee">
          <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/XC37Kmu9o"><img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Support devPub"><span style="margin-left:5px">Support devPub</span></a>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <v-card class="mt-5 pt-2" flat >
      <v-bottom-nav absolute :value="true" :active.sync="e1" color="transparent" class="pt-2">
        <v-btn flat color="secondary" value="/home" append replace to="/home">
          <span class="subheading">/home</span>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn flat color="secondary" value="/ithappened" append replace to="/ithappened">
          <span class="subheading">/ithappened</span>
          <v-icon>history</v-icon>
        </v-btn>
        <v-btn flat color="secondary" value="/wesolved" append replace to="/wesolved">
          <span class="subheading">/wesolved</span>
          <v-icon>lightbulb_outline</v-icon>
        </v-btn>
        <v-btn flat color="secondary" value="/webuilt" append replace to="/webuilt">
          <span class="subheading">/webuilt</span>
          <v-icon>build</v-icon>
        </v-btn>
        <v-btn flat color="secondary" value="/publish" append replace  to="/publish">
          <span class="subheading">/share</span>
          <v-icon>announcement</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
    <main>
      <transition name="fade" mode="out-in" v-on:after-enter="afterEnter" appear>
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </main>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>devPub_ © {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
  import Publication from './components/Publication'
  import ItHappened from './components/ItHappened'

  export default {
    name: 'app',
    components: {
      Publication,
      ItHappened
    },
    data () {
      return {
        e1: 'recent',
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 2 ? active + 1 : 0).toString()
      },
      afterEnter: function (el) {
        // how to have this per-route
        console.log('Route entered')
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
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

  .fade-enter-active, .fade-leave-active
    transition: opacity 0.3s

  .fade-enter, .fade-leave-active
    opacity: 0

</style>
