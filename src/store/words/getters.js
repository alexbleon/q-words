export function getNextRandom (state) {
  return () => {
    // console.log(state.words)
    return state.words[Math.floor(Math.random() * state.words.length)]
  }
}
