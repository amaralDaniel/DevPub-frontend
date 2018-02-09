<template>
  <div>
    <input v-model="title" placeholder="Give it a title">
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
    </quill-editor>

    <span>Section:</span>
    <select v-model="selected" placeholder="Choose one">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>

    <button v-on:click="postPublication">Share</button>
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
        selected: 'itHappened',
        options: [
          { text: '/itHappened', value: 'itHappened' },
          { text: '/weSolved', value: 'weSolved' },
          { text: '/weBuilt', value: 'weBuilt' }
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
          category: this.selected
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

<style scoped>

</style>
