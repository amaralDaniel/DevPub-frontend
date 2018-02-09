<template>
  <div id='subscribe'>
    <h2>Subscribe us</h2>
    <p>Do it!</p>
  </div>
</template>
<script>
export default {
  name: 'subscribe',
  data: () => ({

  })
}
</script>
<style lang="sass">
@import '../styles/variables.scss'

body
  margin: 0

#subscribe
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $strange-color
  margin: 5%
  visibility: visible
  opacity: 1

.slide-fade-enter-active
  transition: all .3s ease

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(10px)
  opacity: 0

</style>
