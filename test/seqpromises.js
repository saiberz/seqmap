const {seqmap} = require('../lib/index')

function asyncfn(seconds){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved after' + seconds)
    }, seconds*1000)
  })
}

function logger(val){
  console.log(val)
}


seqmap([3,4,4,6], asyncfn, logger)
