export function updateWords (context, payload) {
  const arr = payload.split('\n').filter((item) => item.trim() !== '')
  context.commit('SAVE_WORDS', arr)
}
