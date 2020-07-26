<template>
  <q-page class="flex flex-center">
    this is just test
    <q-input v-model="text"/>
    <q-btn @click="restore" label="restore"/>
    <q-btn @click="save" label="save"/>
    <q-item>
    <p>{{ text }}</p>
    </q-item>
    <q-uploader
        label="Individual upload"
        @uploaded="upload"
        @added="addFile"
      ></q-uploader>
  </q-page>
</template>

<script>

export default {
  name: 'Configure',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    restore () {
      this.text = this.$q.localStorage.getItem('text')
      console.log('restore')
    },
    save () {
      this.$q.localStorage.set('text', this.text)
      console.log('save')
    },
    upload (info) {
      console.log('uploaded')
    },
    addFile (files) {
      console.log(files)
      const reader = new FileReader()
      reader.onload = () => {
        this.$store.dispatch('words/updateWords', reader.result)
      }
      reader.readAsText(files[0])
    }
  }
}
</script>
