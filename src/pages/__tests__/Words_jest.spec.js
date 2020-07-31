/* eslint-disable */
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { Quasar, date, QPage, QHeader, QLayout, QBtn } from 'quasar'

import Words from '../Words.vue'

describe('Words.vue', () => {
  const localVue = createLocalVue()
  // localVue.use(Quasar, { components: All, directives: All, plugins: All })
  localVue.use(Quasar, { components: [QPage, QHeader, QLayout, QBtn] })

  const wrapper = shallowMount(Words, {
    localVue,
    mocks: {
      $store: {
        getters: {
          'words/getNextRandom': () => { return "word1" }
        }
      }
    }
  })
  const vm = wrapper.vm

  test('Words.vue mock should exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('has a render func', () => {
    expect(typeof vm.regenerateWord).toBe('function')
  })
  it('has initial state of word', () => {
    vm.regenerateWord();
    expect(vm.full_word).toBe('word1')
    expect(vm.word).toBe('wor')
    expect(vm.unhide).toBe(false)
  })

})
