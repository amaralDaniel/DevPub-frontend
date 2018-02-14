<template>
  <div class="editor-main">
    <input class="post-title" v-model="title" placeholder="Insert the title here">
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>

    <v-flex xs6>
      <v-select
        v-bind:items="items"
        v-model="selected"
        label="Section"
      ></v-select>
    </v-flex>



      <!--<select v-model="selected" placeholder="Choose one">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>-->

      <v-btn v-on:click="postPublication" flat class="post-publication-button">Submit publication</v-btn>

  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'

  import { quillEditor } from 'vue-quill-editor'

  import axios from 'axios'

  export default {
    name: 'Publisher',
    components: {
      quillEditor
    },
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {
          // some quill options
        },
        selected: null,
        items: [
          { text: '/itHappened' },
          { text: '/weSolved' },
          { text: '/weBuilt' }
        ],
        title: ''
      }
    },
    methods: {
      onEditorBlur (quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus (quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady (quill) {
        console.log('editor ready!', quill)
      },
      onEditorChange ({ quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
      },
      postPublication: function () {
        axios.post('http://127.0.0.1:5000/post', {
          body: this.content,
          title: this.title,
          category: this.selected.text
        })
          .then(response => {
            console.log('Submitted')
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted () {
      console.log('this is current quill instance object', this.editor)
    }
  }
</script>

<style lang="sass">
  @import '../styles/variables.scss'

  .editor-main
    width: 75vw
    margin: 0 auto
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: space-around
    align-items: stretch
    align-content: stretch

  .quill-editor
    height: auto

  .post-title
    width: 55vw
    margin: 3vh auto 2vh 0
    height: 3vh
    font-size: medium
    outline: none

  .section-selector
    margin: 2vh 0 1vh auto

  .post-publication-button
    font-size: small
    color: $main-green


</style>
