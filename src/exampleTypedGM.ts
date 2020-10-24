export default (function () {
  return () => GM.getValue('test', 'a default value')
})()
