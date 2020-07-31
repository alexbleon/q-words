<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <div class="column items-center">
        <p>{{ word }}</p>
      </div>
      <div class="column">
        <q-btn label="show" @click="showWord" v-show="!unhide"/>
        <q-btn label="next" @click="regenerateWord" v-show="unhide"/>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Words',
  data () {
    return {
      unhide: false,
      full_word: '',
      word: ''
    }
  },
  computed: {
  },
  mounted () {
    console.log('Words:mounted')
    // console.log(this.$q.localStorage.getItem('words'))
    this.regenerateWord()
  },
  methods: {
    showWord () {
      this.unhide = true
      this.word = this.full_word
    },
    regenerateWord () {
      this.full_word = this.$store.getters['words/getNextRandom']()
      this.word = this.full_word.slice(0, 3)
      this.unhide = false
    }
  }
}
</script>
