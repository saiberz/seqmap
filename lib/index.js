module.exports = async function (list, action, callback, done) {
  for (let [index, element] of list.entries()){
    const result = await action(element, index)
    callback(result)
  }
  if(done) done()
}
