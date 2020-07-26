/*
export function someMutation (state) {
}
*/
import Vue from 'vue'

export function SAVE_WORDS (state, payload) {
  Vue.set(state, 'words', [...payload])
}
