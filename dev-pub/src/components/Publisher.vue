<template>
  <div class="editor-main">
    <v-layout row wrap>
      <v-flex xs12 class="mt-3">
        <v-text-field
          label="The title of your post"
          :counter="50"
          v-model="title"
          ref="title"
          required
          :rules="[
            () => !!title || 'This field is required',
            (v) => v.length <= 50 || 'Max 50 characters'
           ]"
          :error-messages="errorMessages"
        ></v-text-field>

        <v-text-field
          label="A tl;dr of your post"
          :counter="150"
          v-model="tldr"
          ref="tldr"
          :rules="[
            () => !!tldr || 'This field is required',
            (v) => v.length <= 150 || 'Max 150 characters'
            ]"
          :error-messages="errorMessages"
        ></v-text-field>




      <quill-editor v-model="content"
                    ref="content"
                    :options="editorOption"
                    @blur="onEditorBlur($event)"
                    @focus="onEditorFocus($event)"
                    @ready="onEditorReady($event)">
      </quill-editor>


        <v-select
          v-bind:items="items"
          v-model="selected"
          ref="selected"
          label="Section"
          :rules="[() => !!selected || 'This field is required']"
          required=""
          class="mt-3"
        ></v-select>
      </v-flex>
    </v-layout>

    <transition name="fade">
      <div v-if="formHasErrors">
        <v-alert type="error" :value="true">
          Please, fill everything accordingly.
        </v-alert>
      </div>
      <div v-if="publicationSuccessful">
        <v-alert type="success" :value="true">
          Publication submitted with success.
        </v-alert>
      </div>
    </transition>

        <v-flex text-xs-center my-3 fixed>
          <div>
            <v-btn v-on:click="submit"  large color="primary" class="post-publication-button">Submit publication</v-btn>
          </div>
        </v-flex>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import hljs from 'highlight.js'

  import { quillEditor } from 'vue-quill-editor'

  import axios from 'axios'

  export default {
    name: 'Publisher',
    components: {
      quillEditor
    },
    data () {
      return {
        content: '<h2>hello, world!\n</h2>',
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{'header': 1}, {'header': 2}],
              [{'script': 'sub'}, {'script': 'super'}],
              [{'indent': '-1'}, {'indent': '+1'}],
              [{'direction': 'rtl'}],
              [{'size': ['small', false, 'large', 'huge']}],
              [{'header': [1, 2, 3, 4, 5, 6, false]}],
              [{'font': []}],
              [{'color': []}, {'background': []}],
              [{'align': []}]
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        },
        selected: '',
        items: [
          { text: 'itHappened' },
          { text: 'weSolved' },
          { text: 'weBuilt' }
        ],
        title: '',
        tldr: '',
        errorMessages: [],
        formHasErrors: false,
        publicationSuccessful: false
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
        var _self = this
        axios.post('https://devpub.herokuapp.com/post', {
          body: this.content,
          title: this.title,
          category: this.selected.text
        })
          .then(response => {
            console.log('Submitted')
            _self.publicationSuccessful = true
            setTimeout(function () {
              console.log('set timeout')
              _self.publicationSuccessful = false
            }, 5000)
          })
          .catch(e => {
            console.log(e)
          })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true
        })

        if (!this.formHasErrors) {
          this.formHasErrors = false
          this.postPublication()
        }
      }
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      },
      form () {
        return {
          title: this.title,
          tldr: this.tldr,
          selected: this.selected,
          content: this.content
        }
      }
    },
    mounted () {
      console.log('this is current quill instance object', this.editor)
    },
    watch: {
      name () {
        this.errorMessages = []
      }
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

  .fade-enter-active, .fade-leave-active
    transition: opacity .5s

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    opacity: 0


</style>
