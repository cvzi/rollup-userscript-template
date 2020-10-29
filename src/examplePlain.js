export default (function () {
  window.setTimeout(function delayedError() {
    throw 'I am a delayed error'
  }, 3000)
  return 'Plain javascript'
})()
