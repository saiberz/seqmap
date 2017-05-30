module.exports = async function (list, action, callback, done) {
  for (let element of list){
    const result = await action(element)
    callback(result)
  }
  if(done) done()
}
